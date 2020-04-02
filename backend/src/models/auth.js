'use strict';
const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: String,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  update_at: Date,
  deleted_at: Date,
});

const auth = mongoose.model('auth', authSchema);

module.exports = auth;