const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const prescriptionSchema = Schema({
    drugID: {
        type: String
    },
    doctorID: {
        type: String
    },
    patientID: {
        type: String
    },
    drugName: {
        type: String,
        required: true
    },
    route: {
        type: String
    },
    dosage: {
        type: String,
        default: null
    },
    numberOfDays: {
        type: Number,
        default: null

    },
    remark: {
        type: String,
        default:null
    }
}, { timestamps: true })
module.exports = mongoose.model('Prescription', prescriptionSchema)