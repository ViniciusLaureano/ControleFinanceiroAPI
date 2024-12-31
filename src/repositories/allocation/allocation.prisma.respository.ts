import { Injectable } from '@nestjs/common';
import { AllocationRepository } from './allocation.repository';
import { PrismaService } from 'src/database/prisma.service';
import { Allocation } from '@prisma/client';

@Injectable()
export class PrismaAllocationRepository implements AllocationRepository {
  constructor(private prisma: PrismaService) {}

  getAllocationsByUser(user_id: string): Promise<Allocation[]> {
    return this.prisma.allocation.findMany({ where: { user_id } });
  }

  getAllocationById(id: string): Promise<Allocation> {
    return this.prisma.allocation.findUnique({ where: { id } });
  }

  updateAllocation(
    allocation1: Allocation,
    allocation2: Allocation,
    allocation3: Allocation,
  ): Promise<Allocation[]> {
    return this.prisma.$transaction(async (prisma) => {
      const allocations: Allocation[] = [];

      allocations.push(
        await prisma.allocation.update({
          where: { id: allocation1.id },
          data: { percent: allocation1.percent },
        }),
      );
      allocations.push(
        await prisma.allocation.update({
          where: { id: allocation2.id },
          data: { percent: allocation2.percent },
        }),
      );
      allocations.push(
        await prisma.allocation.update({
          where: { id: allocation3.id },
          data: { percent: allocation3.percent },
        }),
      );

      return allocations;
    });
  }
}
