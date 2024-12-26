import { ApiProperty } from '@nestjs/swagger';

export class AuthToken {
  /**
   * JWT token provided upon successful login.
   * This token is used for user validation in subsequent requests
   * as part of Bearer Authentication.
   */
  @ApiProperty({
    description: 'JWT token for Bearer Authentication',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  access_token: string;
}
