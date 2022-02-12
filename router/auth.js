const router = require('express').Router();

router.post('/register', (req, res) =>  {
    res.send('Register path');
});

router.post('/login' , (req, res) =>  {
    res.send('login');
});


module.exports = router;