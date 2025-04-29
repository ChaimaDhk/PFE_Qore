const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    name: String,
    date: String,
    place:String,
    category:String,
    description: String,
    price: String,
    img:String ,
    Qte:String
   
});

const event = mongoose.model('Event', eventSchema);

module.exports = event;