const chalk = require('chalk');

module.exports = ({ ns }) => (ns ? chalk.cyan(ns) : ns);
