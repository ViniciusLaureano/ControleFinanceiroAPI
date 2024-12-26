import { User } from '@prisma/client';
import { Request } from 'express';

export class AuthRequestDTO extends Request {
  user: User;
}
