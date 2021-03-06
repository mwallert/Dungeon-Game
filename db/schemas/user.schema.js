let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let UserSchema = new Schema({
      name:       ({type: String, required: true, lowercase: true}),
      email:      ({type: String, required: true, lowercase: true}),
      password:   ({type: String, required: true}),
      character:  []
});

let User = mongoose.model('User', UserSchema);

module.exports = User;
