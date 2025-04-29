
const mongoose = require('mongoose');
const categotySchema = mongoose.Schema({
    name: String,
    description: String
  
   
});

const category = mongoose.model('Category',  categotySchema);

module.exports = category;