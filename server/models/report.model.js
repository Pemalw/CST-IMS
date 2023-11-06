const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  reportNo: { type: String, required: true },
  clientName: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  age: { type: Number, required: true},
  gender: { type: String , required: true},
  colId: { type: Number , required: true},
  contactNo: { type: Number , required: true},
  email: { type: String, required: true},
  medicinePrescribed: { type: String, required: true},
  diagnosis: { type: String, required: true},
}, {
  timestamps: true,
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;