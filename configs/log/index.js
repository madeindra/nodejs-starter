// import
const { default: pino } = require('pino');

// wrap logger
const logger = pino();

module.exports = {
  fatal: (message = '', scope = '', data = null) => logger.fatal({ scope, message, data }),
  error: (message = '', scope = '', data = null) => logger.error({ scope, message, data }),
  warn: (message = '', scope = '', data = null) => logger.warn({ scope, message, data }),
  info: (message = '', scope = '', data = null) => logger.info({ scope, message, data }),
  debug: (message = '', scope = '', data = null) => logger.debug({ scope, message, data }),
  trace: (message = '', scope = '', data = null) => logger.trace({ scope, message, data }),
};
