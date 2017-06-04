const chalk = require('chalk');
const prettyMs = require('pretty-ms');

module.exports = ({ responseTime }) => {
  const time = prettyMs(parseInt(responseTime, 10));
  return chalk.grey(time);
};
