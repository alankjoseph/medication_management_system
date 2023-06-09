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
    scanningReport:{
        type: String,
        default:null
    },

    advisingDoctor: {
        type: String,
    },
    reason: {
        type: String
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    admittedDate: {
        type: String,
        default:null
    },
    isAdmit: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

module.exports = mongoose.model('Patient', patientSchema)