const app = require('../src/app');
const http = require('http');
const cors = require('cors');
const config = require('../src/config');
//const debug = require('debug')('backend-firebase:server');

const server = http.createServer(app);
//console.log(config.port);
server.listen(config.port, () => console.log('API rodando na porta: ' + config.port));
