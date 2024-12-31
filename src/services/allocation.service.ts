import { Injectable } from '@nestjs/common';
import { AllocationRepository } from 'src/repositories/allocation/allocation.repository';

@Injectable()
export class AllocationService {
  constructor(private allocationRepository: AllocationRepository) {}
}
