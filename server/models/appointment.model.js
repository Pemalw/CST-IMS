const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  clientName: { type: String, required: true },
  appointTime: { type: String, required: true },
  appointDate: { type: Date, required: true },
  dateOfBirth: { type: Date, required: true},
  gender: { type: String , required: true},
  colId: { type: Number , required: true},
  contactNo: { type: Number , required: true},
  email: { type: String, required: true},
  state: { type: String, required: true},
  applicationNo: { type: String, required: true},
}, {
  timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;