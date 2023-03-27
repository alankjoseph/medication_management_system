const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nurseSchema = Schema({
    name:{
        type: String,
        required: true,

    },
    department:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required: true
    },
    mobile:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        
    },
    duty:{
        type: Boolean,
        default:false
    }


})

module.exports = mongoose.model('Nurse',nurseSchema)