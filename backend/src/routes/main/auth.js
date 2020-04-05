'use strict';
// Import ExpressJS
const express = require('express');

// Import Controller
const {register, login} = require('../../controllers/auth');

// Create new ExpressJS Route
const router = express.Router();

// Routing
router.post('/login', login);
router.post('/register', register);
router.post('/activate');
router.post('/forget-password');
router.post('/update-password');

// Export Module
module.exports = router;