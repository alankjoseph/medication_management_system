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
    },
    isDisabled: {
        type: Boolean,
        default:false
    }


})
nurseSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    const nurse = await this.findOne({ email })
    if (!nurse) {
        throw Error('Invalid email or password')
    }
    if (password === !nurse.password) {
        throw Error('Invalid email or password')
    }
    return nurse
}

module.exports = mongoose.model('Nurse',nurseSchema)