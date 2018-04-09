// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var UserSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  allergies: [String],
  diets: [String],
  weeks: [Schema.Types.ObjectId],
  favorites: [Schema.Types.ObjectId]
},{timestamp: true})

// register the schema as a model
var User = mongoose.model('User', UserSchema);