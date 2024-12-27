import { UserPlanDTO } from 'src/dtos/user/userplan.dto';

export abstract class UserRepository {
  abstract getUserPlan(userId: string): Promise<UserPlanDTO>;
}
