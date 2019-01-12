var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var VerifyToken = require('../auth/VerifyToken')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
var Team = require('./Team')
var User = require('../user/User')

router.post('/create/:userId', VerifyToken, async (req, res, next) => {
    const { userId } = req.params
    // Create new team
    const newTeam = new Team(req.body)
    // Get User
    const user = await User.findById(userId)
    // Assign User as Team's coach
    newTeam.coach = user
    // save the team
    await newTeam.save()
    // Add team to User's profile
    await User.findByIdAndUpdate(userId, { team: newTeam })
    res.status(201).send(newTeam)
})

router.get('/:teamId', VerifyToken, (req, res, next) => {
    Team.findById(req.params.teamId, (err, team) => {
        if (err) return res.status(500).send('Error finding the Team')
        if (!team) return res.status(404).send('Could not find any Team')
        res.status(200).send(team)
    })
})

router.put('/:teamId/edit', VerifyToken, (req, res, next) => {
    Team.findByIdAndUpdate(req.params.teamId, req.body, (err, team) => {
        if (err) return res.status(500).send('Error finding the Team')
        if (!team) return res.status(404).send('No team found')
        res.status(202).send('Team Updated successfully')
    })
})

router.delete('/:teamId/delete', VerifyToken, (req, res, next) => {
    Training.findByIdAndDelete(res.params.teamId, (err, team) => {
        if (err) return res.status(500).send('Error deleting the Team')
        if (!team) return res.status(404).send('No Team found with this ID')
        res.status(205).send('Team successfully removed')
    })
})

module.exports = router