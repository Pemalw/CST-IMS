// const express = require('express');
// const cors= require('cors');
// const mongoose= require('mongoose');
// const cron = require('node-cron');
// const dotenv = require('dotenv').config();
// const path=require('path');

// require('dotenv').config();

// const app= express();
// const port= process.env.PORT || 5001;

// app.use(cors());
// app.use(express.json());

// const sendEmail = require('./routes/emailSender'); 
// const Appointment = require('./routes/appointment');
// const Report = require('./routes/report');
// const Slot = require('./routes/slot');
// const List=require('./routes/listItems');
// const Inventory=require('./routes/inventory');

// //lets connect to mongodb
// mongoose.connect(process.env.DB_CONNECT)
// .then(() => console.log("Database Connected"))
// .catch(err => console.log(err))

// app.use('/appointment', Appointment);
// app.use('/report', Report);
// app.use('/slot', Slot);
// app.use('/item',List);
// app.use('/inventory',Inventory);
// app.use('/uploads', express.static(path.join('C:/Users/user/Documents/GitHub/CST-IMS-main/CST-IMS/backend', 'uploads')));

// cron.schedule('0 19 * * *', async() => {

//     let Slot = require('./models/slot.model');
//     // Delete all existing documents in the collection.
//     await Slot.deleteMany({});

//     // Insert the default data into the collection.
//     const defaultData = [
//     {
//         appointmentHour: 9,
//         slots: 6,
//     },
//     {
//         appointmentHour: 10,
//         slots: 6,
//     },
//     {
//         appointmentHour: 11,
//         slots: 6,
//     },
//     {
//         appointmentHour: 12,
//         slots: 6,
//     },
//     {
//         appointmentHour: 13,
//         slots: 6,
//     },
//     {
//         appointmentHour: 14,
//         slots: 6,
//     },
//     {
//         appointmentHour: 15,
//         slots: 6,
//     },
//     {
//         appointmentHour: 16,
//         slots: 6,
//     },
//     {
//         appointmentHour: 17,
//         slots: 6,
//     },
//     ]

//     await Slot.insertMany(defaultData);
//   });

//   app.post('/send-email', async (req, res) => {
//     const { recipient, subject, message } = req.body; // Extract recipient, subject, and message from the request body
  
//     if (!recipient || !subject || !message) {
//       return res.status(400).send('Invalid request. Please provide recipient, subject, and message.');
//     }
  
//     try {
//       const response = await sendEmail(recipient, subject, message);
//       console.log('Email sent:', response);
//       res.send('Email sent successfully');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).send('Error sending email');
//     }
//   });

// app.listen(port, ()=> {
//     console.log(`Server is running on port: ${port}`)
// });


// //from here




// //use express.json() to get data into json format
// //port


const express = require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const cron = require('node-cron');
const dotenv = require('dotenv').config();
const path=require('path');

require('dotenv').config();

const app= express();
const port= process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const Appointment = require('./routes/appointment');
const Report = require('./routes/report');
const Slot = require('./routes/slot');
const List=require('./routes/listItems');
const Inventory=require('./routes/inventory');
const sendEmail = require('./routes/emailSender');

//lets connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err))

app.use('/appointment', Appointment);
app.use('/report', Report);
app.use('/slot', Slot);
app.use('/item',List);
app.use('/inventory',Inventory);
app.use('/uploads', express.static(path.join('/Users/macbook/Documents/GitHub/CST-IMS/backend', 'uploads')));

cron.schedule('0 19 * * *', async() => {

    let Slot = require('./models/slot.model');
    // Delete all existing documents in the collection.
    await Slot.deleteMany({});

    // Insert the default data into the collection.
    const defaultData = [
    {
        appointmentHour: 9,
        slot: 6,
    },
    {
        appointmentHour: 10,
        slot: 6,
    },
    {
        appointmentHour: 11,
        slot: 6,
    },
    {
        appointmentHour: 12,
        slot: 6,
    },
    {
        appointmentHour: 13,
        slot: 6,
    },
    {
        appointmentHour: 14,
        slot: 6,
    },
    {
        appointmentHour: 15,
        slot: 6,
    },
    {
        appointmentHour: 16,
        slot: 6,
    },
    {
        appointmentHour: 17,
        slot: 6,
    },
    ]

    await Slot.insertMany(defaultData);
  });

  app.post('/send-email', async (req, res) => {
        const { recipient, subject, message } = req.body; // Extract recipient, subject, and message from the request body
      
        if (!recipient || !subject || !message) {
          return res.status(400).send('Invalid request. Please provide recipient, subject, and message.');
        }
      
        try {
          const response = await sendEmail(recipient, subject, message);
          console.log('Email sent:', response);
          res.send('Email sent successfully');
        } catch (error) {
          console.error('Error sending email:', error);
          res.status(500).send('Error sending email');
        }
      });


app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
});


//from here




//use express.json() to get data into json format
//port