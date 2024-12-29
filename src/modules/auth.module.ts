import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/controllers/auth.controller';
import { PrismaService } from 'src/database/prisma.service';
import { LoginValidationMiddleware } from 'src/middlewares/login.validation.middleware';
import { PrismaAuthRepository } from 'src/repositories/auth/auth.prisma.repository';
import { AuthRepository } from 'src/repositories/auth/auth.repository';
import { AuthService } from 'src/services/auth.service';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { LocalStrategy } from 'src/strategies/local.strategy';
import { UserModule } from './user.module';

@Module({
  imports: [
    UserModule,
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
    JwtStrategy,
    {
      provide: AuthRepository,
      useClass: PrismaAuthRepository,
    },
  ],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('auth/login');
  }
}
