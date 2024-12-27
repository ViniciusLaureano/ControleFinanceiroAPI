import { HttpException, Injectable } from '@nestjs/common';
import { Plan } from '@prisma/client';
import { PlanRepository } from 'src/repositories/plan.repository';

@Injectable()
export class PlanService {
  constructor(private planRepository: PlanRepository) {}

  async getPlans(): Promise<Plan[]> {
    return this.planRepository.getPlans();
  }

  async getPlanById(planId: string): Promise<Plan> {
    let plan: Plan;

    try {
      plan = await this.planRepository.getPlanById(planId);
    } catch (error) {
      throw new HttpException('plan not found', 400);
    }

    return plan;
  }
}
