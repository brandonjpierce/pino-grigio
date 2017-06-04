const http = require('http');
const pino = require('pino-http')();
const { sampleLogs, announce } = require('./utils');

function handle(req, res) {
  pino(req, res);

  // Simulate some server latency
  setTimeout(() => {
    res.end('hello world');
  }, 10);
}

http.createServer(handle).listen(8080, () => {
  announce();
  sampleLogs();
});
