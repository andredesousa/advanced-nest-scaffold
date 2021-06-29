import { Params } from 'nestjs-pino';
import pino from 'pino';
import { environment } from '../environments/environment';

/**
 * Default configuration for app logger.
 *
 * Pino official documentation:
 *
 * @tutorial https://getpino.io/
 * @tutorial https://getpino.io/#/docs/pretty?id=pretty-printing
 * @tutorial https://getpino.io/#/docs/ecosystem
 */
export const LOGGING_CONFIG: Params = {
  pinoHttp: {
    formatters: { level: label => ({ level: label }) },
    level: !environment.production ? 'debug' : 'info',
    prettyPrint: !environment.production ? { singleLine: true } : false,
    timestamp: pino.stdTimeFunctions.isoTime,
    serializers: {
      req: req => ({
        id: req.id,
        method: req.method,
        url: req.url,
      }),
      res: res => ({
        statusCode: res.statusCode,
      }),
    },
  },
};
