// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var WeekSchema = new mongoose.Schema({
  user: Schema.Types.ObjectId,
  monday: [Schema.Types.ObjectId],
  tuesday: [Schema.Types.ObjectId],
  wednesday: [Schema.Types.ObjectId],
  thursday: [Schema.Types.ObjectId],
  friday: [Schema.Types.ObjectId],
  saturday: [Schema.Types.ObjectId],
  sunday: [Schema.Types.ObjectId],
},{timestamp: true})

// register the schema as a model
var Week = mongoose.model('Week', WeekSchema);