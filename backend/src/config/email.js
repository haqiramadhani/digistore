import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: '',
  port: 465,
  secure: true,
  auth: {
    user: '',
    pass: ''
  }
});