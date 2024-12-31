import { Allocation } from '@prisma/client';

export abstract class AllocationRepository {
  abstract getAllocationsByUser(user_id: string): Promise<Allocation[]>;

  abstract getAllocationById(id: string): Promise<Allocation>;

  abstract updateAllocation(
    allocation1: Allocation,
    allocation2: Allocation,
    allocation3: Allocation,
  ): Promise<Allocation[]>;
}
