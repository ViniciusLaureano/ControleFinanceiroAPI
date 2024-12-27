import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaUserRepository } from 'src/repositories/user.prisma.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { UserService } from 'src/services/user.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
