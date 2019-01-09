var express = require('express')
var cors = require('cors')
var app = express()
var db = require('./db')

app.use(cors({
    origin: '*'
}))

var UserController = require('./user/UserController')
var TeamController = require('./team/TeamController')
var PlayerController = require('./player/PlayerController')
var AuthController = require('./auth/AuthController')
var TrainingController = require('./training/TrainingController')

app.use('/users', UserController)
app.use('/team', TeamController)
app.use('/players', PlayerController)
app.use('/training', TrainingController)
app.use('/api/auth', AuthController)

module.exports = app;
    