var mongoose = require('mongoose');
var User = mongoose.model('User');
var Recipe = mongoose.model('Recipe');
var Week = mongoose.model('Week');
module.exports = {
  index: function(req, res) {
    res.render('index');
  },
}