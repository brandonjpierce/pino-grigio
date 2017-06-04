const chalk = require('chalk');

module.exports = ({ req: { url } }) => chalk.white(url);
