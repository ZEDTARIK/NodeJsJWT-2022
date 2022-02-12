const express = require('express');
const app = express();
// import router auth ( login and register )
const authRouter = require('./router/auth');

// import
app.use('/api/user', authRouter);

app.listen(3000, () => console.log('Server up running.....!'));
