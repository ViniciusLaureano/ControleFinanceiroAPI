import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthRegisterDTO } from 'src/dtos/auth/auth.register.dto';
import { AuthService } from 'src/services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() AuthRegisterDTO: AuthRegisterDTO): Promise<AuthRegisterDTO> {
    return this.authService.register(AuthRegisterDTO);
  }
}
