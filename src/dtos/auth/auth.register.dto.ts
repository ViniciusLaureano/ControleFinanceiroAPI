import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class AuthRegisterDTO {
  @ApiProperty({
    description: 'User email',
    example: 'user@example.com',
  })
  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "User's first name",
    example: 'John',
  })
  @IsNotEmpty({ message: 'First Name should not be empty' })
  @IsString()
  first_name: string;

  @ApiProperty({
    description: "User's last name",
    example: 'Doe',
  })
  @IsNotEmpty({ message: 'Last Name should not be empty' })
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'name used by the user in the app',
    example: 'john123',
  })
  @IsNotEmpty({ message: 'Nickname should not be empty' })
  @IsString()
  nickname: string;

  @ApiProperty({
    description:
      'User password (at least: 1 small case letter, 1 capital case letter, 1 number and 1 special character)',
    example: '#0Password',
    minLength: 8,
  })
  @Length(8)
  @Matches(/^(?![.\n])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/, {
    message: 'Password too weak',
  })
  @IsNotEmpty({
    message: 'Password should not be empty',
  })
  password: string;

  @ApiPropertyOptional({
    description: 'User permisison (only "complete" or "basic")',
    example: 'complete',
    default: 'basic',
  })
  permission?: string;
}
