import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Mock } from 'ts-mockery';
import { JwtAuthGuard } from './jwt-auth.guard';

jest.mock('@nestjs/passport', () => ({
  ...jest.requireActual('@nestjs/passport'),
  AuthGuard: () =>
    class {
      canActivate(): boolean {
        return false;
      }
    },
}));

describe('JwtAuthGuard', () => {
  it('returns true when is public', () => {
    const guard: JwtAuthGuard = new JwtAuthGuard(Mock.of<Reflector>({ getAllAndOverride: () => true }));
    const context = Mock.of<ExecutionContext>({
      getHandler: () => () => null,
      getClass: () => typeof null,
    });

    expect(guard.canActivate(context)).toBe(true);
  });

  it('returns false when is not public', async () => {
    const guard: JwtAuthGuard = new JwtAuthGuard(Mock.of<Reflector>({ getAllAndOverride: () => false }));
    const context = Mock.of<ExecutionContext>({
      getHandler: () => () => null,
      getClass: () => typeof null,
    });

    expect(guard.canActivate(context)).toBe(false);
  });
});
