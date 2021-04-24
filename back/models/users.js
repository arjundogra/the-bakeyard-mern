const mongoose = require('mongoose');
const { isEmail } = require('validator');

const users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase:true,
        required:[true,"please enter email"],
        unique:true,
        validate:[isEmail, "please enter valid email"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6,"Minimum length should be 6 characters"]
    }
})

module.exports = mongoose.model("user",users)