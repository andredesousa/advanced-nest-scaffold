import { Controller, Get, Inject } from '@nestjs/common';
import { HealthCheckService, SequelizeHealthIndicator, HealthCheckResult } from '@nestjs/terminus';
import { Sequelize } from 'sequelize';
import { Public } from './auth/decorators/public.decorator';
import { SEQUELIZE } from './core/providers/database.providers';

@Controller()
export class AppController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly db: SequelizeHealthIndicator,
    @Inject(SEQUELIZE) private readonly pgConnection: Sequelize,
  ) {}

  @Get('health')
  @Public()
  async check(): Promise<HealthCheckResult> {
    return this.health.check([() => this.db.pingCheck('database', { connection: this.pgConnection })]);
  }
}
