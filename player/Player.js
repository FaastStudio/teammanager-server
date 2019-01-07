var mongoose = require('mongoose')

//Define a schema
var Schema = mongoose.Schema

var PlayerSchema = new Schema({
  // Name of Player
  name: {
    type: String,
    required: true
  },
  // ID Of Coach
  userId: {
    type: String,
    required: true
  },
  position: {
    type: String
  },
  birthday: {
    type: String
  }
})

var Player = mongoose.model('Player', PlayerSchema)

module.exports = mongoose.model('Player', PlayerSchema)
