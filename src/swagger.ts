import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function generate(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const document = environment.swaggerInitializer(app);
  const path = 'reports/swagger';

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }

  fs.writeFileSync(`${path}/openapi.yaml`, yaml.dump(document));
  fs.writeFileSync(`${path}/openapi.json`, JSON.stringify(document, null, 2));
}

generate();
