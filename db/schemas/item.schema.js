let mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
let Item = new Schema({
      name:     ({type: String, required: true, lowercase: true}),
      use:      ({type: String, required: true, lowercase: true}),
      quantity: ({type: Number, required: true}),
      damage:   ({type: Number, required: false}),
      hit:      ({type: Number, required: false}),
      description: ({type: String, required: true})
});

let item = mongoose.model('Item', Item);

// function createNewItem(newItem) {
//   item.create(newItem, (err, doc) => {
//     if(err){
//       console.log(err);
//     }
//     else {
//       console.log(`${doc} created.`);
//     }
//   });
// }

module.exports = item;
