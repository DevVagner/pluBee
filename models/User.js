const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    accountsFb: {
        type: Array,
        default: []
    },
    accountsIg: {
        type: Array,
        default: []
    },
    type_account: {
        type: String,
        require: true
    },
    fb_acess_token: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    },
    isBloqued: {
        type: Boolean,
        default: false
    },
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Users', User);