const chalk = require('chalk');

module.exports = ({ req: { method } }) => chalk.white(method);
