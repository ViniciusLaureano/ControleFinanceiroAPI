import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthRegisterDTO } from 'src/dtos/auth/auth.register.dto';
import { AuthRepository } from 'src/repositories/auth/auth.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { AuthToken } from 'src/models/auth/auth.token.model';
import { AuthPayload } from 'src/models/auth/auth.payload.model';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async register(authRegisterDTO: AuthRegisterDTO): Promise<AuthRegisterDTO> {
    const { email, first_name, last_name, nickname, password, permission } =
      authRegisterDTO;

    const alreadyExists = await this.authRepository.searchUserLogin(email);
    if (alreadyExists)
      throw new HttpException('User email already exists.', 400);

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await this.authRepository.register(
      email,
      first_name,
      last_name,
      nickname,
      hashedPassword,
      permission,
    );

    if (!result)
      throw new HttpException('Error while registering a new user.', 400);

    return { ...result, password: undefined };
  }

  login(user: User): AuthToken {
    const payload: AuthPayload = {
      sub: user.id,
      email: user.email,
      nickname: user.nickname,
      permission: user.permission,
    };

    const jwtToken = this.jwtService.sign(payload);

    return { access_token: jwtToken };
  }

  async validateUser(email: string, password: string): Promise<User> {
    let user: User;
    try {
      user = await this.authRepository.searchUserLogin(email);

      if (!user) throw new NotFoundException('User not found.');

      const userPlan = await this.userService.getUserPlan(user.id);
      const today = new Date();

      if (userPlan.planId && userPlan.finishDate < today) {
        let removed = false;
        while (!removed) removed = await this.userService.removePlan(user.id);
        user.permission = 'basic';
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new UnauthorizedException();
    } catch (error) {
      throw new UnauthorizedException('Incorrect email and/or password.');
    }

    return { ...user, password: undefined };
  }
}
