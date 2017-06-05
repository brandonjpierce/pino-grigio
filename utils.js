const levels = {
  trace: 'trace',
  debug: 'debug',
  info: 'info',
  warn: 'warn',
  error: 'error',
  fatal: 'fatal',
  user: 'userlvl'
};

exports.levels = levels;

exports.nl = '\n';

exports.isFalsy = value => Boolean(value);

exports.isEmptyObject = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

// Taken from pino source
exports.isPinoLine = line =>
  line &&
  Object.prototype.hasOwnProperty.call(line, 'v') &&
  Object.prototype.hasOwnProperty.call(line, 'pid') &&
  Object.prototype.hasOwnProperty.call(line, 'level') &&
  Object.prototype.hasOwnProperty.call(line, 'hostname');

exports.getLevelName = level => {
  if (level === 10) return levels.trace;
  if (level === 20) return levels.debug;
  if (level === 30) return levels.info;
  if (level === 40) return levels.warn;
  if (level === 50) return levels.error;
  if (level === 60) return levels.fatal;
  return levels.user;
};
