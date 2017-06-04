const chalk = require('chalk');

module.exports = ({ res: { statusCode } }) => {
  if (statusCode >= 400) return chalk.yellow(statusCode);
  if (statusCode >= 300) return chalk.cyan(statusCode);
  if (statusCode >= 200) return chalk.green(statusCode);
  return chalk.white(statusCode);
};
