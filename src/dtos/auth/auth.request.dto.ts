import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Request } from 'express';

export class AuthRequestDTO extends Request {
  @ApiProperty({
    description: 'An user like in database',
    example:
      '{\n"email": "user@example.com",\n"first_name": "John",\n"last_name": "Doe",\n"nickname": "john123",\n"password": undefined,\n"permission": "complete"\n}',
  })
  user: User;
}
