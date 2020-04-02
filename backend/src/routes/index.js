'use strict';
const express = require('express');

const api = require('./api');

const router = express.Router();

router.use('/api', api);
router.use('/*', (req, res) => res.sendFile('index.html'));

module.exports = router;