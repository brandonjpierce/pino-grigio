const Hapi = require('hapi');
const pino = require('hapi-pino');
const { sampleLogs, announce } = require('./utils');

const server = new Hapi.Server();

server.connection({ host: 'localhost', port: 8080 });

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('hello world');
  }
});

server.register(pino, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  server.start(err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    announce();
    sampleLogs();
  });
});
