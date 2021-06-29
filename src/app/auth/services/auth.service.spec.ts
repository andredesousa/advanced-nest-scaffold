import { User } from '@db/models/user';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

jest.mock('@db/models/user');

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(() => {
    jwtService = new JwtService({});
    service = new AuthService(jwtService);
  });

  describe('#login', () => {
    it('returns the user session', async () => {
      const user: User = { id: 1, username: 'user', email: '@email' } as User;

      jest.spyOn(User, 'findOne').mockReturnValue(Promise.resolve(user));
      jest.spyOn(jwtService, 'sign').mockReturnValue('aaa.bbb.ccc');

      expect(await service.login({ username: 'user', password: 'pass' })).toEqual({
        id: user.id,
        email: user.email,
        username: user.username,
        accessToken: 'aaa.bbb.ccc',
      });
    });

    it('fails with an error', async () => {
      jest.spyOn(User, 'findOne').mockReturnValue(Promise.resolve(null));

      await expect(service.login({ username: '', password: '' })).rejects.toThrow('Unauthorized');
    });
  });
});
