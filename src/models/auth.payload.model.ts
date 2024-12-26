export class AuthPayload {
  sub: string;
  email: string;
  nickname: string;
  permission: string;
  iat?: number;
  exp?: number;
}
