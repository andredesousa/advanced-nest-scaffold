import { HealthCheckResult, HealthCheckService } from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';

describe('AppController', () => {
  let appController: AppController;
  let healthCheckService: HealthCheckService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    appController = app.get<AppController>(AppController);
    healthCheckService = app.get<HealthCheckService>(HealthCheckService);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const result: HealthCheckResult = { status: 'ok', details: {} };

      jest.spyOn(healthCheckService, 'check').mockReturnValue(Promise.resolve(result));

      expect(await appController.check()).toEqual(result);
    });
  });
});
