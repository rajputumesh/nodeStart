const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    password: { type: String, required: true },
    }, {
  timestamps: true,
});
var User = mongoose.model('users', userSchema);
module.exports = User;