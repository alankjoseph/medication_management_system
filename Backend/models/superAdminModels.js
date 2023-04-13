const mongoose = require('mongoose')
const Schema = mongoose.Schema

const superAdminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required:true
  }

})
superAdminSchema.statics.login = async function (email, password) {
  if (!email || !password) {
      throw Error('All fields must be filled')
  }
  const superAdmin = await this.findOne({ email })
  if (!superAdmin) {
      throw Error('Invalid email or password')
  }
  if (password != superAdmin.password) {
      throw Error('Invalid email or password')
  }
  return superAdmin
}
module.exports = mongoose.model('SuperAdmin', superAdminSchema)