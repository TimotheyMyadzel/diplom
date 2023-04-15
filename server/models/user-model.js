const { Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true},
    password: {type: String, require: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
})

module.exports = model('User', UserSchema);