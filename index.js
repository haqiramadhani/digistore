'use strict';
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const router = require('./src/routes');

const server = express();
const port = process.env.PORT || 8080;

server.use(cors());
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'public')));
server.use(router);

server.listen(port, () => console.info(`server running in http://192.168.1.99:${port}`));

module.exports = server;