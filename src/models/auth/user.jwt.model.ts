import { ApiProperty } from '@nestjs/swagger';

export class UserFromJwt {
  @ApiProperty({
    description: 'User id',
    example: '1',
  })
  id: string;

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
}
