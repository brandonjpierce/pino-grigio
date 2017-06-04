const chalk = require('chalk');
const { levels, getLevelName } = require('../utils');

module.exports = ({ msg, level }) => {
  let color;

  const levelName = getLevelName(level);
  if (levelName === levels.userlvl) color = 'white';
  if (levelName === levels.trace) color = 'grey';
  if (levelName === levels.debug) color = 'blue';
  if (levelName === levels.info) color = 'green';
  if (levelName === levels.warn) color = 'yellow';
  if (levelName === levels.error || levelName === levels.fatal) color = 'red';

  return chalk[color](msg);
};
