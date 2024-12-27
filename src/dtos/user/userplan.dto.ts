import { Decimal } from '@prisma/client/runtime/library';
import { ApiProperty } from '@nestjs/swagger';

export class UserPlanDTO {
  @ApiProperty({
    description: 'Unique identifier for the User_Plan',
    example: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
  })
  userplanId: string;
  @ApiProperty({
    description: 'Unique identifier for the plan',
    example: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
  })
  planId: string;

  @ApiProperty({
    description: 'Name of the plan',
    example: 'Premium Plan',
  })
  planName: string;

  @ApiProperty({
    description: "Start date of the user's subscription to the plan",
    example: '2024-01-01',
    type: String,
  })
  startDate: Date;

  @ApiProperty({
    description: "End date of the user's subscription to the plan",
    example: '2024-12-31',
    type: String,
  })
  finishDate: Date;

  @ApiProperty({
    description: 'Cost of the plan in decimal format',
    example: 99.99,
    type: Number,
  })
  value: Decimal;
}
