import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Plan } from '@prisma/client';
import { IsPublic } from 'src/decorators/is.public.decorator';
import { PlanService } from 'src/services/plan.service';

@ApiTags('Plan')
@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @IsPublic()
  @Get('')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get all plans',
    description: 'Get all plans',
  })
  getPlans(): Promise<Plan[]> {
    return this.planService.getPlans();
  }

  @IsPublic()
  @Get('/:planId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get plan by id',
    description: 'Get plan by id',
  })
  getPlanById(@Param('planId') planId: string): Promise<Plan> {
    return this.planService.getPlanById(planId);
  }
}
