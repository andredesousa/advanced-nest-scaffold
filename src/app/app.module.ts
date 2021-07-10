import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { TerminusModule } from '@nestjs/terminus';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { FeatureModule } from './feature-example/feature.module';
import { Languages } from './app.i18n';
import { LOGGING_CONFIG } from './app.logger';

@Module({
  imports: [
    LoggerModule.forRoot(LOGGING_CONFIG),
    I18nModule.forRoot({
      fallbackLanguage: Languages.EN,
      parser: I18nJsonParser,
      parserOptions: {
        path: `${environment.assetsPath}/i18n/`,
        watch: !environment.production,
      },
    }),
    AuthModule,
    CoreModule,
    FeatureModule,
    TerminusModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
