import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/controllers/auth.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaAuthRepository } from 'src/repositories/auth.prisma.repository';
import { AuthRepository } from 'src/repositories/auth.repository';
import { AuthService } from 'src/services/auth.service';
import { LocalStrategy } from 'src/strategies/local.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    LocalStrategy,
    {
      provide: AuthRepository,
      useClass: PrismaAuthRepository,
    },
  ],
})
export class AuthModule {}
