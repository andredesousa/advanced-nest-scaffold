import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { logger: false });

  if (!environment.production) {
    environment.swaggerInitializer(app);
  }

  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.use(helmet());
  app.enableCors();

  await app.listen(3000);
}

bootstrap();
