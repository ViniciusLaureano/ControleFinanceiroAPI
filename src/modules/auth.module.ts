import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/auth.controller';
import { PrismaAuthRepository } from 'src/repositories/auth.prisma.repository';
import { AuthRepository } from 'src/repositories/auth.repository';
import { AuthService } from 'src/services/auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: AuthRepository,
      useClass: PrismaAuthRepository,
    },
  ],
})
export class AuthModule {}
