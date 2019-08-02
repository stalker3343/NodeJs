const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const currencySchema = require('./currency').Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: String,
    isAdmin: Boolean,
    portfolio: [{
        address: String,
        currency: currencySchema
    }]
})

const User = mongoose.model('user', userSchema)
module.exports = {
    Schema: userSchema,
    User

}