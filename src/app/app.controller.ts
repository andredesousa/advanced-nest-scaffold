import { Controller, Get, Inject } from '@nestjs/common';
import { HealthCheckService, SequelizeHealthIndicator, HealthCheckResult } from '@nestjs/terminus';
import { Sequelize } from 'sequelize';

@Controller()
export class AppController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly db: SequelizeHealthIndicator,
    @Inject('SEQUELIZE') private readonly pgConnection: Sequelize,
  ) {}

  @Get('health')
  async check(): Promise<HealthCheckResult> {
    return this.health.check([() => this.db.pingCheck('database', { connection: this.pgConnection })]);
  }
}
