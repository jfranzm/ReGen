const express = require('express');

const router = express.Router();
const isLoggedIn = require('../config/auth');

router.get('/landingPage', isLoggedIn, (req, res) => {
    res.render('landingPage');
});


module.exports = router