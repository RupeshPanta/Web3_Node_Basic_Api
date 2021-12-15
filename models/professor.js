const mongoose = require('mongoose')


const professorSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    PHD: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Professor',professorSchema)