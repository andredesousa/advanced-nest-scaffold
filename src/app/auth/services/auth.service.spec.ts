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
      const user: User = {
        username: 'admin',
        password: '$2b$10$jkzR/NI9PCgA3UXhx5T6WOqPJkzhTGAJY/5Z0txIfRt57ThjqfSOe',
      } as User;

      jest.spyOn(User, 'findOne').mockReturnValue(Promise.resolve(user));
      jest.spyOn(jwtService, 'sign').mockReturnValue('aaa.bbb.ccc');

      expect(await service.login({ username: 'admin', password: 'admin' })).toEqual({
        id: user.id,
        email: user.email,
        username: user.username,
        accessToken: 'aaa.bbb.ccc',
      });
    });

    it('fails with an error', async () => {
      jest.spyOn(User, 'findOne').mockReturnValue(Promise.resolve(null));

      await expect(service.login({ username: 'admin', password: '1234' })).rejects.toThrow('Unauthorized');
    });
  });
});
