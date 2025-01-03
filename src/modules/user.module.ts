import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaUserRepository } from 'src/repositories/user/user.prisma.repository';
import { UserRepository } from 'src/repositories/user/user.repository';
import { UserService } from 'src/services/user.service';
import { PlanModule } from './plan.module';

@Module({
  imports: [PlanModule],
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
