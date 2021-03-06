import { initModels } from '@db/models/init-models';
import { Logger, Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { environment } from '../../../environments/environment';

export const PG_DATABASE = 'POSTGRES';

export const databaseProviders: Provider[] = [
  {
    provide: PG_DATABASE,
    inject: [Logger],
    useFactory: (logger: Logger): Sequelize => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        database: environment.dbName,
        host: environment.dbHost,
        password: environment.dbPassword,
        port: environment.dbPort,
        username: environment.dbUsername,
        logging: msg => logger.log(msg),
      });

      initModels(sequelize);

      return sequelize;
    },
  },
];
