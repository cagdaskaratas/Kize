const functions = require('firebase-functions');
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
admin.initializeApp()

let transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "apikey",
    pass: "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"
  }
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  const email_from = request.query.email_from;
  const message = request.query.message;
  const name = request.query.name;
  const number = request.query.number

  const mailOptions = {
    from: 'Kize Reklam <burak@kizereklam.com>',
    to: 'burak@kizereklam.com',
    subject: 'Kizereklam contact form submission',
    html: `${name} <br><br> ${message} <br><br> ${number} <br><br> From ${email_from}`
  }

  transporter.sendMail(mailOptions, (error,info) => {
    if(error) {
      console.log(`Error:(name) ${name} --- (email) ${email_from} --- (message) ${number} --- (number) ${message} --- (error) ${error.toString()}`);
      response.send(error.toString())
    }
    response.send('You Message was submitted successfully !')
  })
})


