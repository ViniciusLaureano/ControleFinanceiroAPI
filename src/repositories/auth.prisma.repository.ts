import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private prisma: PrismaService) {}

  register(
    email: string,
    first_name: string,
    last_name: string,
    nickname: string,
    password: string,
    permission: string,
  ): Promise<User> {
    return this.prisma.user.create({
      data: { email, first_name, last_name, nickname, password, permission },
    });
  }
}
