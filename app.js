const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')

app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())

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
    