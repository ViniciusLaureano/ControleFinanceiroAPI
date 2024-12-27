import { Injectable } from '@nestjs/common';
import { PlanRepository } from 'src/repositories/plan.repository';

@Injectable()
export class PlanService {
  constructor(private planRepository: PlanRepository) {}
}
