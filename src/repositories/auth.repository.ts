import { User } from '@prisma/client';

export abstract class AuthRepository {
  abstract register(
    email: string,
    first_name: string,
    last_name: string,
    nickname: string,
    password: string,
    permission: string,
  ): Promise<User>;

  abstract searchUserLogin(email: string): Promise<User>;
}
