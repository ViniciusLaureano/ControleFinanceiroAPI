import { Injectable } from '@nestjs/common';
import { AllocationRepository } from './allocation.repository';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaAllocationRepository implements AllocationRepository {
  constructor(private prisma: PrismaService) {}
}
