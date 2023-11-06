const mongoose = require('mongoose');


//create scheme

const Inventory = new mongoose.Schema({
    inventory_name: { type: String, required: true },
    quantity: { type: Number, required: true },
    expiryDate: { type: Date, required: true },
  });


module.exports = mongoose.model('inventory', Inventory);