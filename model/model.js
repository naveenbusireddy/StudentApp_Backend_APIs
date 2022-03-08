const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    e_mail: {
        required: true,
        type: String
    },
    phone_no: {
        required: true,
        type: Number
    },
    address: {
        required: true,
        type: String
    },
    pin_code: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Students', studentSchema)