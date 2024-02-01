const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    phone: String,
    email: String,
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel