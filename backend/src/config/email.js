import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'email-smtp.ap-south-1.amazonaws.com',
  port: 465,
  secure: true,
  auth: {
    user: 'AKIAYOA3SUCVNP7XYKHL',
    pass: 'BFLS/+su00wdFXIpE6Y5YkG6PN3OggbYHO3N5P/LeXyV'
  }
});

module.exports = transporter;