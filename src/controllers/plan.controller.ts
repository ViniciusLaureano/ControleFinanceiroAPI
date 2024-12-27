import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlanService } from 'src/services/plan.service';

@ApiTags('Plan')
@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}
}
