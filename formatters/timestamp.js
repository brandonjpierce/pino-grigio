const chalk = require('chalk');

module.exports = () => {
  const time = new Date();
  const timestamp = time.toLocaleTimeString();
  const formatted = timestamp.replace(/ /, '');
  return chalk.gray(formatted);
};
