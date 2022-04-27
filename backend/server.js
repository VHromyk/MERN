const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const usersRouter = require('./routes/user')
const exerciseRouter = require('./routes/exercise');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI);

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfulyy')
})

app.use('/users', usersRouter);
app.use('/users/add', usersRouter);
app.use('/users/update', usersRouter);

app.use('/exercises', exerciseRouter);
app.use('/exercises/add', exerciseRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})