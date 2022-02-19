const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to database
mongoose.connect(process.env.DB_CONNECT, ()=> console.log('connect'))
// import router auth ( login and register )
const authRouter = require('./router/auth');

// import
app.use('/api/user', authRouter);

app.listen(3000, () => console.log('Server up running.....!'));
