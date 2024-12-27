import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthPayload } from 'src/models/auth/auth.payload.model';
import { UserFromJwt } from 'src/models/auth/user.jwt.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: AuthPayload): Promise<UserFromJwt> {
    return {
      id: payload.sub,
      email: payload.email,
      nickname: payload.nickname,
      permission: payload.permission,
    };
  }
}
