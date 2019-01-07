var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var VerifyToken = require('../auth/VerifyToken')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
var User = require('./User')

// Create a New User
router.post('/', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }, (err, user) => {
    if (err) return res.status(500).send('There was a problem adding the information to the database.')
    res.status(201).send(user)
  })
})

// Returns All the Users in The Database
router.get('/', VerifyToken, (req, res, next) => {
  User.find({}, {password: 0}, (err, users) => {
    if (err) return res.status(500).send('There was a problem finding the users.')
    res.status(200).send(users)
  })
})

// Returns Signle User by ID
router.get('/:id', VerifyToken, (req, res, next) => {
  User.findById(req.params.id, {password: 0}, (err, user) => {
    if (err) return res.status(500).send('There was a problem finding the user.')
    res.status(200).send(user)
  })
})

// Deletes a User from the Database
router.delete('/:id', VerifyToken, (req, res, next) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send('There was a problem deleting the user.')
    res.status(200).send('User: ' + user.name + 'was deleted')
  })
})

// Update single User by ID
router.put('/:id', VerifyToken, (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
    if (err) return res.status(500).send('There was a problem updating the user.')
    res.status(200).send('User Updated')
  })
})

module.exports = router
