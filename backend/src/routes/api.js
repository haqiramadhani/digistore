'use strict';
// Import ExpressJS
const express = require('express');

// Import other Route
const {auth} = require('./main');
const whatsapp = require('./whatsapp');

// Create new ExpressJS Route
const router = express.Router();

// Routing
router.use('/auth', auth);
router.use('/whatsapp', whatsapp);

// Export Module
module.exports = router;