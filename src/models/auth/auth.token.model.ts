import { ApiProperty } from '@nestjs/swagger';

export class AuthToken {
  @ApiProperty({
    description:
      'JWT token for Bearer Authentication\nJWT token provided upon successful login.\nThis token is used for user validation in subsequent requests as part of Bearer Authentication.',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwibmlja25hbWUiOiJqb2huMTIzIiwicGVybWlzc2lvbiI6ImV4YW1wbGUiLCJpYXQiOjEsImV4cCI6MX0.0RDFSaCEHD2CYHq2u1AlbZJGmWU_q8ESPIIrnoKvUV0',
  })
  access_token: string;
}
