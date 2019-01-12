//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds241664.mlab.com:41664/teammanager`;
// Local DB
// var mongoDB = 'mongodb://localhost:27017/teammanager'
mongoose.connect(mongoDB, { useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));