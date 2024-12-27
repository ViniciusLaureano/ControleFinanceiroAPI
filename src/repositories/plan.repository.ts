import { Plan } from '@prisma/client';

export abstract class PlanRepository {
  abstract getPlans(): Promise<Plan[]>;
  abstract getPlanById(planId: string): Promise<Plan>;
}
