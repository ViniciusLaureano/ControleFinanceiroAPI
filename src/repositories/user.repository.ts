import { User_Plan } from '@prisma/client';
import { UserPlanDTO } from 'src/dtos/user/userplan.dto';

export abstract class UserRepository {
  abstract getUserPlan(userId: string): Promise<UserPlanDTO>;
  abstract assignPlan(
    user_id: string,
    plan_id: string,
    start_date: Date,
    finish_date: Date,
  ): Promise<User_Plan>;
}
