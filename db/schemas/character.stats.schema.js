let mongoose = require('mongoose'),
    Schema = mongoose.Schema;


let Stats = new Schema({
      strength:     ({type: Number, required: true}),
      constitution: ({type: Number, required: true}),
      dexterity:    ({type: Number, required: true}),
      intelligence: ({type: Number, required: true}),
      wisdom:       ({type: Number, required: true}),
      charisma:     ({type: Number, required: true})
});

let stats = mongoose.model('Stats', Stats);

module.exports = stats;
