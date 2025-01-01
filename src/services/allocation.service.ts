import { HttpException, Injectable } from '@nestjs/common';
import { Allocation } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { AllocationRepository } from 'src/repositories/allocation/allocation.repository';

@Injectable()
export class AllocationService {
  constructor(private allocationRepository: AllocationRepository) {}

  getAllocationsByUser(user_id: string): Promise<Allocation[]> {
    try {
      return this.allocationRepository.getAllocationsByUser(user_id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  getAllocationById(id: string): Promise<Allocation> {
    try {
      return this.allocationRepository.getAllocationById(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  updateAllocation(allocations: Allocation[]): Promise<Allocation[]> {
    try {
      const sumAllocations = new Decimal(allocations[0].percent)
        .plus(allocations[1].percent)
        .plus(allocations[2].percent);

      if (sumAllocations.comparedTo(new Decimal(100)) !== 0)
        throw new HttpException('The sum of values must be 100', 400);
      return this.allocationRepository.updateAllocation(
        allocations[0],
        allocations[1],
        allocations[2],
      );
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }
}
