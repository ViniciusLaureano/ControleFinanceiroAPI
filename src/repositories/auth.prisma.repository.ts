import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private prisma: PrismaService) {}
}
