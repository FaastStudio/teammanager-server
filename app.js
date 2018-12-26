var express = require('express')
var cors = require('cors')
var app = express()
var db = require('./db')

app.use(cors({
    origin: '*'
}))

var UserController = require('./user/UserController')
var AuthController = require('./auth/AuthController')

app.use('/users', UserController)

app.use('/api/auth', AuthController)

module.exports = app;
