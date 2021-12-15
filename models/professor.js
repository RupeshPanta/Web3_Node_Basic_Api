const mongoose = require('mongoose')


const professorSchema = new mongoose.Schema({

    Name: {
        type: String, // Name of Professor
        required: true
    },
    Subject: {         // What subject he teaches
        type: String,
        required: true
    },
    PHD: {
        type: Boolean,  // has he done PHD or not ?
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Professor',professorSchema)