const express = require('express');
const cors= require('cors');
const mongoose= require('mongoose')
const cron = require('node-cron');
const dotenv = require('dotenv').config();

require('dotenv').config();

const app= express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const Appointment = require('./routes/appointment');
const Report = require('./routes/report');
const Slot = require('./routes/slot');

//lets connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err))

app.use('/appointment', Appointment);
app.use('/report', Report);
app.use('/slot', Slot);

cron.schedule('0 19 * * *', async() => {

    let Slot = require('./models/slot.model');
    // Delete all existing documents in the collection.
    await Slot.deleteMany({});

    // Insert the default data into the collection.
    const defaultData = [
    {
        appointmentHour: 9,
        slot: 0,
    },
    {
        appointmentHour: 10,
        slot: 0,
    },
    {
        appointmentHour: 11,
        slot: 0,
    },
    {
        appointmentHour: 12,
        slot: 0,
    },
    {
        appointmentHour: 13,
        slot: 0,
    },
    {
        appointmentHour: 14,
        slot: 0,
    },
    {
        appointmentHour: 15,
        slot: 0,
    },
    {
        appointmentHour: 16,
        slot: 0,
    },
    {
        appointmentHour: 17,
        slot: 0,
    },
    ]

    await Slot.insertMany(defaultData);
  });


app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
});


//from here




//use express.json() to get data into json format
//port