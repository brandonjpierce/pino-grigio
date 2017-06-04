const split = require('split2');
const parse = require('fast-json-parse');
const formatUrl = require('./formatters/url');
const formatEmoji = require('./formatters/emoji');
const formatStack = require('./formatters/stack');
const formatMessage = require('./formatters/message');
const formatLoadTime = require('./formatters/load-time');
const formatTimestamp = require('./formatters/timestamp');
const formatNamespace = require('./formatters/namespace');
const formatHttpMethod = require('./formatters/http-method');
const formatStatusCode = require('./formatters/status-code');
const formatContentSize = require('./formatters/content-size');
const { isPinoLine, getLevelName, isFalsy, levels, nl } = require('./utils');

function format(chunk) {
  let output;

  let parts = [
    formatTimestamp(chunk),
    formatEmoji(chunk),
    formatNamespace(chunk),
    formatMessage(chunk)
  ];

  // If we have http data, add more info to log line
  if (chunk.req && chunk.res) {
    parts = parts.concat([
      '→',
      formatHttpMethod(chunk),
      formatStatusCode(chunk),
      formatUrl(chunk),
      formatLoadTime(chunk),
      formatContentSize(chunk)
    ]);
  }

  parts.push(nl);

  output = parts.filter(isFalsy).join(' ');

  if (chunk.stack && chunk.level) {
    const levelName = getLevelName(chunk.level);

    if (levelName === levels.fatal) {
      const stackFrame = formatStack(chunk.stack);
      output += `${stackFrame}${nl}`;
    }
  }

  return output;
}

function parseStream(stream) {
  const { value, err } = parse(stream);

  if (!isPinoLine(value) || value === null) {
    return `${stream}${nl}`;
  }

  if (err !== null) {
    return `${formatStack(err.stack)}${nl}`;
  }

  return format(value);
}

module.exports = split(parseStream);
