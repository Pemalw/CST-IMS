const router = require('express').Router();
let Appoitnment = require('../models/appointment.model');

router.route('/').get((req, res) => {
  Appoitnment.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const clientName = req.body.clientName;
  const appointTime = req.body.appointTime;
  const appointDate = Date.parse(req.body.appointDate);
  const dateOfBirth = Date.parse(req.body.dateOfBirth);
  const gender = req.body.gender;
  const colId = Number(req.body.colId);
  const contactNo= Number(req.body.contactNo);
  const email= req.body.email;
  const state=req.body.state;
  const applicationNo=req.body.applicationNo;

  const appointment = new Appoitnment({
    clientName,
    appointTime,
    appointDate,
    dateOfBirth,
    gender,
    colId,
    contactNo,
    email,
    state,
    applicationNo,
  });

  appointment.save()
    .then(() => res.json('Appointment Succesfull!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Appoitnment.findById(req.params.id)
    .then(appointment => {
     
      appointment.clientName = req.body.clientName;
      appointment.appointTime = req.body.appointTime;
      appointment.appointDate = Date.parse(req.body.appointDate);
      appointment.dateOfBirth = Date.parse(req.body.dateOfBirth);
      appointment.gender=req.body.gender;
      appointment.colId = req.body.coldId;
      appointment.contactNo = req.body.contactNo;
      appointment.email = req.body.email;
      appointment.state = req.body.state;
      appointment.applicationNo= req.body.applicationNo;



      appointment.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;