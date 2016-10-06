let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let Character = new Schema({
      name:       ({type: String, required: true}),
      class:      Schema.Types.Mixed,
      inventory:  []
});

let newCharacter = mongoose.model('Character', Character);

module.exports = newCharacter;
