import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { PrismaService } from 'src/database/prisma.service';
import { User, UserPermission } from '@prisma/client';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private prisma: PrismaService) {}

  register(
    email: string,
    first_name: string,
    last_name: string,
    nickname: string,
    password: string,
    permission: UserPermission,
  ): Promise<User> {
    return this.prisma.user.create({
      data: { email, first_name, last_name, nickname, password, permission },
    });
  }

  searchUserLogin(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email: email } });
  }
}
