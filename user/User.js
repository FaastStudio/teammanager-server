var mongoose = require('mongoose')

//Define a schema
var Schema = mongoose.Schema

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  // Profile Data
  
  // Team of User
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  // team-home
  address: {
    type: String
  },
  addressNumber: {
    type: String
  },
  zip: {
    type: String,
    min: [2, 'Zip too short']
  }
})

var User = mongoose.model('User', UserSchema)

module.exports = User
