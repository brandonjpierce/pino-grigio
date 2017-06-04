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

exports.isFalsy = value => !!value;

exports.isEmptyObject = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

exports.isPinoLine = line =>
  line &&
  line.hasOwnProperty('v') &&
  line.hasOwnProperty('pid') &&
  line.hasOwnProperty('level') &&
  line.hasOwnProperty('hostname');

exports.getLevelName = level => {
  if (level === 10) return levels.trace;
  if (level === 20) return levels.debug;
  if (level === 30) return levels.info;
  if (level === 40) return levels.warn;
  if (level === 50) return levels.error;
  if (level === 60) return levels.fatal;
  return levels.user;
};
