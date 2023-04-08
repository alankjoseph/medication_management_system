const mongoose = require('mongoose')

const drugSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    route:{
        type:String,
        required: true
    },
    manufaturer: {
        type:String,
        required: true
    }
    


})
module.exports = mongoose.model('Drug',drugSchema)