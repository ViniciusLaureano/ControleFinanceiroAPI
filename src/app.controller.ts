import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUser } from './decorators/current.user.decorator';
import { User } from '@prisma/client';
import { UserFromJwt } from './models/user.jwt.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiBearerAuth('access-token')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  @ApiBearerAuth('access-token')
  getMe(@CurrentUser() user: User): UserFromJwt {
    const { id, email, nickname, permission } = user;
    const obj: UserFromJwt = { id, email, nickname, permission };
    return obj;
  }
}
