import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';

export interface IEnvironment {
  production: boolean;
  assetsPath: string;
  jwtSecret: string;
  dbHost: string;
  dbName: string;
  dbPassword: string;
  dbPort: number;
  dbUsername: string;
  swaggerInitializer: (app: INestApplication) => OpenAPIObject;
}
