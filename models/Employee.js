const mongoose = require('mongoose');
const Schema = mongose.Schema;

const employeeSchema = new Shcema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String
    },
    email: {
        type : String
    },
    phone: {
        type: String
    },
    age: { 
        type: Number
    }

   
}, {timestamps: true});

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee

