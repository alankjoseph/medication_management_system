const jwt = require('jsonwebtoken')
const Doctor = require('../models/doctorModels')
const doctorAuth = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(404).json({ error: 'Authorization token required' })
  }

  const token = authorization.split(' ')[1]
  try {
    const { _id } = jwt.verify(token, process.env.SECRET)
    req.doctor = await Doctor.findOne({ _id }).select('_id')
    req.doctorName = await Doctor.findOne({ _id }).select('name')
    next()
  } catch (error) {
    res.status(404).json({ error: 'Request is not Authorized' })
  }

}

module.exports = doctorAuth