const http = require('http');
const logger = require('@greencoast/logger');
const https = require('https'); // Added to use HTTPS

const keepAlive = ({ text, port }) => {
  const portToUse = port || 3000;

  const server = https.createServer((_, res) => { // Changed from http to https
    res.writeHead(200);
    res.end(text || "I'm alive.");
  });
  server.listen(portToUse);

  logger.info(`Started an HTTP server on port ${portToUse}. You should use a service like UptimeRobot to poll the web address associated to this service to keep the bot alive.`);

  return server;
};

module.exports = {
  keepAlive
};
