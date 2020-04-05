'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authModel = require('../models/auth');
const authValidation = require('../validations/auth');

module.exports = {
  register: async (req, res) => {
    // validation
    const {errors, valid} = await authValidation(req.body, authModel);
    if (!valid) return res.status(400).json({errors});
    // create new user
    const newUser = new authModel(req.body);
    // sending verification email

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
  login: async (req, res) => {
    // validation
    const {errors, valid} = await authValidation(req.body, authModel);
    if (!valid) return res.status(400).json({errors});
    // check data
    const user = await authModel.findOne(req.body);
    res.send(user)
  },
};