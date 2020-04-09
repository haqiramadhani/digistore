'use strict';
// import ExpressJS
const express = require('express');

// Import other Route
const api = require('./api');

// Create new ExpressJS Route
const router = express.Router();

// Routing
router.use('/api', api);
// router.use('/file');

// Export Module
module.exports = router;