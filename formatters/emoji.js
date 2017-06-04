const { getLevelName } = require('../utils');

const emojis = {
  trace: '🔍',
  debug: '📦',
  info: '🌲',
  warn: '⚠️',
  error: '🚨',
  fatal: '💀',
  userlvl: '👻'
};

module.exports = ({ level }) => ` ${emojis[getLevelName(level)]} `;
