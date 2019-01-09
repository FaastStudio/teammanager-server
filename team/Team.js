var mongoose = require('mongoose')

var Schema = mongoose.Schema

var TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    coach: {
        type: String,
        default: null
    },
    players: {
        type: Array,
        default: []
    }
})

var Team = mongoose.model('Team', TeamSchema)

module.exports = Team