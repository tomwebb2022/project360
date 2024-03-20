const mongoose = require('mongoose');

const { Schema } = mongoose;

const emailSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 8
    }
});

const EmailModel = mongoose.model('emails', emailSchema);

module.exports = EmailModel;