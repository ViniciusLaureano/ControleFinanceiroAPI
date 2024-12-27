import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { AuthModule } from './modules/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt.auth.guard';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
