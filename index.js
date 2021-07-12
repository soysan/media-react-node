const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));


// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/post', postRoute);

app.listen(8800, () => {
  console.log('Backend server started')
})
