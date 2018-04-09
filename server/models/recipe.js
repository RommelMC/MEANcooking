// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var RecipeSchema = new mongoose.Schema({
  name: {type: String},
  picture: {type: String},
  favorites: {type: Number},
  url: {type: String},
},{timestamp: true})

// register the schema as a model
var Recipe = mongoose.model('Recipe', RecipeSchema);