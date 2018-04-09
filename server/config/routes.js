var cooking = require('../controllers/cooking.js');
let path = require('path');
module.exports = function(app) {
  app.get('/', cooking.index);
  // app.post('/register', cooking.register);
  // app.post('/login', cooking.login);
  app.get('/parties', cooking.getParties);
  
  // app.get('/:partyid/people', cooking.getPartyPeople);
  app.all("*", (req,res,next) => {
    var ngName = "front";
    res.sendFile(path.resolve("./"+ngName+"/dist/index.html"))
});
}
