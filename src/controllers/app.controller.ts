import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserFromJwt } from 'src/models/auth/user.jwt.model';
import { CurrentUser } from 'src/decorators/current.user.decorator';
import { AppService } from 'src/services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Hello World!',
    description: 'Hello World" message to test route with bearer token.',
  })
  @ApiOkResponse({
    description: 'success',
    type: String,
    example: 'Hello World!',
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Current user info',
    description: 'returns login infos about current user.',
  })
  @ApiOkResponse({
    description: 'success',
    type: UserFromJwt,
  })
  getMe(@CurrentUser() user: User): UserFromJwt {
    const { id, email, nickname, permission } = user;
    const obj: UserFromJwt = { id, email, nickname, permission };
    return obj;
  }
}
