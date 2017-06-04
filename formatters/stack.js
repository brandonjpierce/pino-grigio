const boxen = require('boxen');
const cleanStack = require('clean-stack');

module.exports = stack =>
  boxen(cleanStack(stack), {
    padding: 1,
    borderColor: 'red'
  });
