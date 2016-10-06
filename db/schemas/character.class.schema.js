let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let Class = new Schema({
      name:         ({type: String, required: true, lowercase: true}),
      description:  ({type: String, required: true, lowercase: true}),
      health:       ({type: Number, required: true}),
      stats:        Schema.Types.Mixed,
      abilities:    []
});

let newClass = mongoose.model('Class', Class);

module.exports = newClass;
