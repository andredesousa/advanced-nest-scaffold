import { Mock } from 'ts-mockery';
import { Authentication } from '../dtos/authentication.dto';
import { UserSession } from '../dtos/user-session.dto';
import { AuthService } from '../services/auth.service';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;
  let userSession: UserSession;

  beforeEach(async () => {
    userSession = Mock.of<UserSession>();
    authService = Mock.of<AuthService>({
      login: () => Promise.resolve(userSession),
      refresh: () => Promise.resolve('aaa.bbb.ccc'),
    });

    controller = new AuthController(authService);
  });

  describe('#login', () => {
    it('returns a user session', async () => {
      const auth: Authentication = { username: 'user', password: 'pass' };
      const result: UserSession = await controller.login(auth);

      expect(result).toBe(userSession);
      expect(authService.login).toHaveBeenCalledWith(auth);
    });
  });

  describe('#refresh', () => {
    it('returns a token', async () => {
      const token: string = await controller.refresh({ user: userSession });

      expect(token).toBe('aaa.bbb.ccc');
      expect(authService.refresh).toHaveBeenCalledWith(userSession);
    });
  });
});
