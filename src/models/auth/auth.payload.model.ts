import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AuthPayload {
  @ApiProperty({
    description: 'User id',
    example: '1',
  })
  sub: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'User nickname',
    example: 'john123',
  })
  nickname: string;

  @ApiProperty({
    description: 'User permission',
    example: 'basic',
  })
  permission: string;

  @ApiPropertyOptional({
    description: 'JWT data',
    example: 170000,
  })
  iat?: number;

  @ApiPropertyOptional({
    description: 'JWT data',
    example: 170000,
  })
  exp?: number;
}
