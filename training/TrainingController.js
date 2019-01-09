var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var VerifyToken = require('../auth/VerifyToken')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
var Training = require('./Training')

router.get('/test/date', (req, res) => {
    res.status(200).send({
        date: Date.now()
    })
})

// Get All trainings of team
router.get('/:teamId', VerifyToken, (req, res, next) => {
    Training.findOne({ teamId: req.params.teamId }, (err, training) => {
        if (err) return res.status(500).send('There was an error starting the training...')
        res.status(200).send(training)
    })
})

router.post('/create', VerifyToken, (req, res, next) => {
    Training.create(req.body, (err, training) => {
        if (err) return res.status(500).send('There was an error starting the training...')
        res.status(201).send(training)
    })
})

router.put('/:trainingId/edit', VerifyToken, (req, res, next) => {
    if(!req.body) return res.status(501).send('No data provided!')
    Training.findByIdAndUpdate(req.params.trainingId, req.body, (err, training) => {
        if (err) return res.status(500).send(`Something went wrong: ${err}`)
        res.status(202).send('Training-Data changed successfully!')
    })
})

router.delete('/:trainingId/delete', VerifyToken, (req, res, next) => {
    Training.findByIdAndDelete(res.params.trainingId, (err, training) => {
        if (err) return res.status(500).send('Error deleting the Training')
        if (!training) return res.status(404).send('No Training found with this ID')
        res.status(205).send('Training successfully removed')
    })
})
module.exports = router