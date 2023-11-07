//import mongoose to create new scheme
const mongoose = require('mongoose');


//create scheme
const ListItemSchema = new mongoose.Schema({
    title:{type: String, required: true },
    date:{type: Date, required: true}, 
    content:{type: String, required: true}, 
    image: {type: String, required: true},
    source: { type: String, required: true },
    postDate: {type: Date, default: Date.now},

     },
)

module.exports = mongoose.model('todo', ListItemSchema);