'use strict';

// Server routing to database
let express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = require('./schemas/user.schema.js'),
    createCharacter = require('./characterCreation.js');

// Connecting to the DB!

mongoose.connect('mongodb://mwallert:galmeraz@ds035806.mlab.com:35806/mikesdb');

let Schema = mongoose.Schema;

function createNewCharacter(charName, className, user){
  if(user.character.length){
    for(var i = 0; i < user.character.length; i++){
      if(user.character[i].name == charName){
        return 0;
      }
    }
  }
  let Character = createCharacter(charName, className);

  return Character;
}

router.post('/', function(req, res, next){
    User.find({}, function(error, data){
      if(error){
        res.sendStatus(404)
      }
      else if(data){
        for(var i = 0; i < data.length; i++){
          if(data[i].email === req.body.email && data[i].password === req.body.password){
            //user found!
            console.log(`User ${data[i].name} is now logged in.`);
            res.send(data[i]);
          }
        }
      }
    });
});

router.post('/createUser', function(req, res, next){
  let userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  let user = new User(userData);

  user.save(function(err, data){
    if(err) {
      res.send(err);
    }
    else {
      console.log(`Created new user ${data.name}.`);
      res.render('login',{
        name: data.name
      });
    }
  });
});

router.put('/createCharacter', function(req,res,next){
  User.findOne({ name: req.body.name.toLowerCase() }, function(error, user){
      if(error){
          res.json(error);
      }
      else if(user == null){
          res.json('no such user!');
      }
  })
  .then( (user) => {
    let charName = req.body.character,
        charClass = req.body.characterClass,
        newCharacter = createNewCharacter(charName, charClass, user);
        
    if(newCharacter){
      user.character.push( newCharacter );
      user.save( function(error, data){
          if(error){
              res.json(error);
          }
          else{
              console.log(`User ${req.body.name} has created character ${req.body.character}.`);
              next();
          }
      });
    }
    else res.send(`Character ${req.body.character} already exists.`);
  })
  .catch( (err) => {
    next(err);
  });
});

module.exports = router;
