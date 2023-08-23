const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'username already in use']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, 'Email already in use'],
        required: 'Email address is required',              
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    description: {
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('User', userSchema);

