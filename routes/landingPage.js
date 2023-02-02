const express = require('express');

const router = express.Router();
const isLoggedIn = require('../config/auth');

router.get('/', (req, res) => {
    res.render('landingPage/index', {title: 'ReGen'});
})


module.exports = router