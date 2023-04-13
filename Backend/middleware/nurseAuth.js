const jwt = require('jsonwebtoken')
const Nurse = require('../models/nurseModels')
const nurseAuth = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(404).json({ error: 'Authorization token required' })
  }

  const token = authorization.split(' ')[1]
  try {
    const { _id } = jwt.verify(token, process.env.SECRET)
    req.nurse = await Nurse.findOne({ _id }).select('_id')
    next()
  } catch (error) {
    res.status(404).json({ error: 'Request is not Authorized' })
  }

}

module.exports = nurseAuth