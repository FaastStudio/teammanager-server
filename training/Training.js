var mongoose = require('mongoose')

var Schema = mongoose.Schema

var TrainingSchema = new Schema({
    teamId: {
        type: String,
        required: true
    },
    date: {
        start: {
            type: Date,
            default: Date.now(),
            required: true
        },
        end: {
            type: Date
        }
    },
    playerIds: {
        type: Array,
        default: [],
        required: true
    }
})

var Training = mongoose.model('Training', TrainingSchema)

module.exports = mongoose.model('Training', TrainingSchema)
