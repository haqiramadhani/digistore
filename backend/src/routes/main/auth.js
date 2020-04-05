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
router.post('/forgetPassword');
router.post('/updatePassword');

// Export Module
module.exports = router;