import { User } from '@db/models/user';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { Authentication } from '../dtos/authentication.dto';
import { UserSession } from '../dtos/user-session.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Login
   * @param auth The credentials.
   * @returns The user session.
   */
  async login({ password, username }: Authentication): Promise<UserSession> {
    const user = await User.findOne({ where: { username } });
    const isMatch = await bcrypt.compare(password, `${user?.password}`);

    if (user && isMatch) {
      return {
        id: user.id,
        email: user.email,
        username: user.username,
        accessToken: this.jwtService.sign({ id: user.id, username: user.username }),
      };
    }

    throw new UnauthorizedException();
  }

  /**
   * Refresh
   * @param user The user session.
   * @returns The jwt token.
   */
  async refresh(user: UserSession): Promise<string> {
    return this.jwtService.sign({ id: user.id, username: user.username });
  }
}
