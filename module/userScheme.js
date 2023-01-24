const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:4,
        max:12
    },
    lastName:{
        type:String,
        required:true,
        min:4,
        max:12
    },
    batch:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})

const students = mongoose.model('students',userScheme)

module.exports = students