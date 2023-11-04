//import mongoose to create new scheme
const mongoose = require('mongoose');


//create scheme
const ListItemSchema = new mongoose.Schema({
    title:{
         type: String,
         required: true,
    },

    content:{
        type: String,
        required: true,
    }, 

     image: {
        type: String,
        required: true,

     },

},
)

module.exports = mongoose.model('todo', ListItemSchema);