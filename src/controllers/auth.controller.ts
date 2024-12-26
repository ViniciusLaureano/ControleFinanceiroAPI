import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthRegisterDTO } from 'src/dtos/auth/auth.register.dto';
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
}
