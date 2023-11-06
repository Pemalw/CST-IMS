const router = require('express').Router();
let Report = require('../models/report.model');

router.route('/').get((req, res) => {
  Report.find()
    .then(report => res.json(report))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const reportNo = req.body.reportNo;
  const clientName = req.body.clientName;
  const time = req.body.time;
  const date = Date.parse(req.body.date);
  const age = Number(req.body.age);
  const gender = req.body.gender;
  const colId = Number(req.body.colId);
  const contactNo= Number(req.body.contactNo);
  const email= req.body.email;
  const medicinePrescribed = req.body.medicinePrescribed;
  const diagnosis = req.body.diagnosis;

  const newReport = new Report({
    reportNo,
    clientName,
    time,
    date,
    age,
    gender,
    colId,
    contactNo,
    email,
    medicinePrescribed,
    diagnosis,
  });

  newReport.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Report.findById(req.params.id)
    .then(report => res.json(report))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Report.findByIdAndDelete(req.params.id)
    .then(() => res.json('Report deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Report.findById(req.params.id)
    .then(report => {
      report.reportNo=req.body.reportNo;
      report.clientName = req.body.clientName;
      report.time = req.body.time;
      report.date = Date.parse(req.body.date);
      report.age = Number(req.body.age);
      report.colId = req.body.coldId;
      report.contactNo = req.body.contactNo;
      report.email = req.body.email;
      report.medicinePrescribed = req.body.description;
      report.diagnosis= req.body.diagnosis;


      report.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;