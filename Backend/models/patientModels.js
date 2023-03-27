const mongoose = require('mongoose')
const Schema = mongoose.Schema
const patientSchema = Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bedNumber: {
        type: String,
    },
    weight: {
        type: Number,
    },
    bloodPresure: {
        type: String,
    },

    advisingDoctor: {
        type: String,
    },
    reason: {
        type: String
    }
})

module.exports = mongoose.model('Patient', patientSchema)