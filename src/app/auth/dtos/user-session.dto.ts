export class UserSession {
  id?: number;

  username!: string;

  email!: string;

  accessToken!: string;

  roles?: string[];
}
