import { Inject, Module, OnModuleDestroy } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { databaseProviders, PG_DATABASE } from './providers/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class CoreModule implements OnModuleDestroy {
  constructor(@Inject(PG_DATABASE) private readonly pgConnection: Sequelize) {}

  async onModuleDestroy(): Promise<void> {
    await this.pgConnection.close();
  }
}
