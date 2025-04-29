const mongoose = require('mongoose');
const messagesSchema = mongoose.Schema({
    name: String,
   
    email: String,
    
    message:String
   
});

const messages = mongoose.model('Messages', messagesSchema);

module.exports = messages;