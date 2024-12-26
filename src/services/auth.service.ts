import { HttpException, Injectable } from '@nestjs/common';
import { AuthRegisterDTO } from 'src/dtos/auth/auth.register.dto';
import { AuthRepository } from 'src/repositories/auth.repository';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async register(authRegisterDTO: AuthRegisterDTO): Promise<AuthRegisterDTO> {
    const { email, first_name, last_name, nickname, password, permission } =
      authRegisterDTO;

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
}
