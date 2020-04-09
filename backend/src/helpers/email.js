const transporter = require('../config/email');

module.exports = async (user, to, subject, text, html) => {
  transporter.sendMail({
    from: `"IQWrite" <${user || 'no-reply'}@iqwrite.com>`,
    to,
    subject,
    text,
    html
  });
};