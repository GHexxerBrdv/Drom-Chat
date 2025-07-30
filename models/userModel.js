const mongoose = require("mongoose");
const validator = require("validator");
const validatePhonNumber = require("../utils/validatePhon");

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validator: [validator.isEmail, "Invalid email"]
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    mobile: {
        type: String,
        required: true,
        unique: [true, "Mobile is already in use"],
        validate: {
            validator: validatePhonNumber,
            message: "Invalid Phone Number."
        },
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Users", userschema);