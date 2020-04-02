'use strict';
const express = require('express');

const {register, login} = require('../controllers/auth');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/activate');
router.post('/forget-password');
router.post('/update-password');

module.exports = router;