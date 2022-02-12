const express = require('express');
const app = express();
// import 
const authRouter = require('./router/auth');

app.use('/api/user', authRouter);

app.listen(3000, () => console.log('Server up running.....!'));
