var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var VerifyToken = require('../auth/VerifyToken')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
var Player = require('./Player')

// Create a New Player
router.post('/create', VerifyToken, (req, res, next) => {
  console.log(req.body)
  Player.create(req.body, (err, player) => {
    if (err) return res.status(500).send('There was a problem adding the information to the database.')
    res.status(200).send(player)
  })
})

// Returns All the Players in The Database by Team
router.get('fullTeam/:teamId', VerifyToken, (req, res, next) => {
  Player.find({ teamId: req.params.teamId }, (err, players) => {
    if (err) return res.status(500).send('There was a problem finding the players.')
    res.status(200).send(players)
    console.log(players)
  })
})

// Returns Signle Player by ID
router.get('/:id', VerifyToken, (req, res, next) => {
  Player.findById(req.params.id, (err, player) => {
    if (err) return res.status(500).send('There was a problem finding the player.')
    res.status(200).send(player)
  })
})

// Deletes a Player from the Database
router.delete('/:id/delete', VerifyToken, (req, res, next) => {
  Player.findByIdAndRemove(req.params.id, (err, player) => {
    if (err) return res.status(500).send('There was a problem deleting the player.')
    res.status(200).send('Player: ' + player.name + 'was deleted')
  })
})

// Update single Player by ID
router.put('/:id/edit', VerifyToken, (req, res, next) => {
  Player.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, player) => {
    if (err) return res.status(500).send('There was a problem updating the player.')
    res.status(200).send(player)
  })
})

module.exports = router
