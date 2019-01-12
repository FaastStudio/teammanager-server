var mongoose = require('mongoose')

var Schema = mongoose.Schema

var TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    coach: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    players: {
        type: [Schema.Types.ObjectId],
        ref: 'Player'
    }
})

var Team = mongoose.model('Team', TeamSchema)

module.exports = Team