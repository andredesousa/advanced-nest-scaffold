import { JwtStrategy } from './jwt.strategy';

describe('JwtStrategy', () => {
  it('returns a jwt session', async () => {
    const service: JwtStrategy = new JwtStrategy();
    const result = await service.validate({ id: 1, username: 'user' });

    expect(result).toEqual({ id: 1, username: 'user' });
  });
});
