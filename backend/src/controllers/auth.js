'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authModel = require('../models/auth');
const authValidation = require('../validations/auth');
const sendEmail = require('../helpers/email');

module.exports = {
  register: async (req, res) => {
    // validation
    const {errors, valid} = await authValidation(req.body, authModel);
    if (!valid) return res.status(400).json({errors});
    // create new user
    const newUser = new authModel(req.body);
    // sending verification email
    await sendEmail('no-reply', req.body.email, 'Please Confirm Your Email Address', `Hai ${req.body.first_name}!\nTerimakasih sudah bergabung di IQWrite. Untuk mengaktifkan akun kamu silakan verifikasi email kamu terlebih dahulu!\nMasukan PIN dibawah untuk verifikasi email\n${}`);
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