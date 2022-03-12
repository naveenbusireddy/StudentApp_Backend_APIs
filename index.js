const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));

app.use(cors({
    origin: '*'
}));
app.use(express.json());

const routes = require('./routes/routes');
app.use('/api', routes)

app.listen(3000, () => {
    console.log(`server started at ${3000}`)
})

require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error);
})
database.once('connected', () => {
    console.log('Data Base Connected');
})