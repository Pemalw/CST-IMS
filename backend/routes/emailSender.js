const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'healthassistant02@gmail.com',
    pass: 'Health12345'//Health12345
  }
});

function sendEmail(recipient, subject, message) {
  const mailOptions = {
    from: 'healthassistant02@gmail.com',
    to: recipient,
    subject: subject,
    text: message
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
}

module.exports = sendEmail;
