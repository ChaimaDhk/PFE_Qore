const mongoose = require('mongoose');

const reserved_eventsSchema = mongoose.Schema({
   
    idEvent:String,
     idUser:String,
    qteRes:String,
    totalePrice:String,
  
   
});

const reserved_events = mongoose.model('Reserved_events',  reserved_eventsSchema);

module.exports = reserved_events;