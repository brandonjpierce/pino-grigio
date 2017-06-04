const app = require('express')();
const pino = require('express-pino-logger')();
const { sampleLogs, announce } = require('./utils');

app.use(pino);

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(8080, () => {
  announce();
  sampleLogs();
});
