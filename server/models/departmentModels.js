const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    beds:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Department', departmentSchema)