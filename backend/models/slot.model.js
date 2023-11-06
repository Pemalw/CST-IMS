const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slotSchema = new Schema({
    appointmentHour: { type: Number, required: true },
    slots: {
        type: Number,
        required: true,
        validate(value) {
          if (isNaN(value)) {
            throw new Error('The slots field must be a number.');
          }
        },
      },
    
}, {
  timestamps: true,
});

const Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot;