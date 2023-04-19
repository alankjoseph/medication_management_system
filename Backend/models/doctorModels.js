const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    department: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,

    },
    duty: {
        type: Boolean,
        default: false
    },
    isDisabled: {
        type: Boolean,
        default: false
    }


})
doctorSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    const doctor = await this.findOne({ email })
    if (!doctor) {
        throw Error('Invalid email or password')
    }
    if (password != doctor.password) {
        throw Error('Invalid email or password')
    }
    return doctor
}

module.exports = mongoose.model('Doctor', doctorSchema)