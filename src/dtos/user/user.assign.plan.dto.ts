import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class UserAssignPlanDTO {
  @ApiProperty({
    description: 'Unique identifier for the User',
    example: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
  })
  @Length(32)
  @IsNotEmpty()
  userId: string;
  @ApiProperty({
    description: 'Unique identifier for the Plan',
    example: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
  })
  @Length(32)
  @IsNotEmpty()
  planId: string;
}
