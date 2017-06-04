const boxen = require('boxen');
const pino = require('pino')({
  level: process.env.LEVEL || 'trace'
});

exports.sampleLogs = () => {
  console.log('default console.log output');
  console.log(
    'default console.log JSON output',
    JSON.stringify({ foo: 'bar' })
  );

  pino.trace('trace level log');
  pino.debug('debug level log');
  pino.info('info level log');
  pino.warn('warning level log');
  pino.error('error level log');
  pino.fatal(new Error('Mock uncaught error'), 'fatal level log');
};

exports.announce = () => {
  console.log(
    boxen('HTTP example ready at http://localhost:8080', { padding: 1 })
  );
};
