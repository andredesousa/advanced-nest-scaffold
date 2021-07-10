import { OpenAPIObject } from '@nestjs/swagger';
import * as path from 'path';

import { IEnvironment } from './i.environment';

export const environment: IEnvironment = {
  production: true,
  assetsPath: path.join(__dirname, '/assets'),
  jwtSecret: process.env.JWT_SECRET,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: +process.env.DB_PORT,
  dbUsername: process.env.DB_USER,
  swaggerInitializer: () => ({} as OpenAPIObject),
};
