const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');



const app = express();

//use express.json() to get data into json format
app.use(express.json());

//port
const PORT = process.env.PORT || 5501 ;

//use cors
app.use(cors());

//lets import routes
const ItemRoute = require('./routes/listItems');

//lets connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err))

app.use('/', ItemRoute);


//Add Port and connect to server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



