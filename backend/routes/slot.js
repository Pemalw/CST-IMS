const router = require('express').Router();
let Slot = require('../models/slot.model');

router.route('/').get((req, res) => {
  Slot.find()
    .then(slots => res.json(slots))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const appointmentHour = Number(req.body.appointmentHour);
  const slots = Number(req.body.slots);
  

  const slot = new Slot({
   appointmentHour,
   slots,
  });

  slot.save()
    .then(() => res.json('Appointment Succesfull!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;