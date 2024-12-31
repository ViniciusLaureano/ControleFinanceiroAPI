import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AllocationService } from 'src/services/allocation.service';

@ApiTags('Allocation')
@Controller('allocation')
export class AllocationController {
  constructor(private allocationService: AllocationService) {}
}
