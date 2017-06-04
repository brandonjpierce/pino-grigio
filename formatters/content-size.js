const chalk = require('chalk');
const prettyBytes = require('pretty-bytes');
const parseHeaders = require('parse-headers');

module.exports = ({ res }) => {
  if (res.header) {
    const headers = parseHeaders(res.header);
    const contentLength = headers['content-length'];

    if (contentLength) {
      const bytes = parseInt(contentLength, 10);
      const size = prettyBytes(bytes).replace(/ /, ''); // is replacing space faster?
      return chalk.grey(size);
    }
  }

  return null;
};
