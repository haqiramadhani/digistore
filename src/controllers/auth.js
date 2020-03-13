'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authModel = require('../models/auth');
const authValidation = require('../validations/auth');

module.exports = {
  register: async (req, res) => {
    // validation
    const {errors, valid} = authValidation(req.body);
    if (!valid) return res.status(400).json({errors});
    // create new user
    const newUser = new authModel(req.body);
    // password encryption
    bcrypt.genSalt(10,(err,salt) => {
      bcrypt.hash(newUser.password,salt,(err,hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
        return res.json(newUser);
      })
    });
  },
};