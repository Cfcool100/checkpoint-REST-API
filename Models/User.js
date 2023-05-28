const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: {
        type : String,
        required : true
    }

});

module.exports = mongoose.model('User', UserSchema);