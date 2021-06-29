import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { TerminusModule } from '@nestjs/terminus';
import { LOGGING_CONFIG } from './app.logger';
import { AppController } from './app.controller';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature-example/feature.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [LoggerModule.forRoot(LOGGING_CONFIG), AuthModule, CoreModule, TerminusModule, FeatureModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
