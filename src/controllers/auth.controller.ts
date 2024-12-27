import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/decorators/is.public.decorator';
import { AuthLoginDTO } from 'src/dtos/auth/auth.login.dto';
import { AuthRegisterDTO } from 'src/dtos/auth/auth.register.dto';
import { AuthRequestDTO } from 'src/dtos/auth/auth.request.dto';
import { AuthToken } from 'src/dtos/auth/auth.token.dto';
import { LocalAuthGuard } from 'src/guards/local.auth.guard';
import { AuthService } from 'src/services/auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create an User',
    description: 'Create a new user',
  })
  register(@Body() AuthRegisterDTO: AuthRegisterDTO): Promise<AuthRegisterDTO> {
    return this.authService.register(AuthRegisterDTO);
  }

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: 'Login',
    description: 'user login that returns a validation token',
  })
  @ApiBody({
    type: AuthLoginDTO,
    description: 'User credentials for login',
  })
  login(@Request() req: AuthRequestDTO): AuthToken {
    return this.authService.login(req.user);
  }
}
