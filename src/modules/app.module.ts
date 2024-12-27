import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { PrismaService } from 'src/database/prisma.service';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { UserModule } from './user.module';

@Module({
  imports: [AuthModule, UserModule],
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
