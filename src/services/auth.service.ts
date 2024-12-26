import { Injectable } from '@nestjs/common';
import { AuthRepository } from 'src/repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}
}
