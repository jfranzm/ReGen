const express = require('express');

const router = express.Router();
const isLoggedIn = require('../config/auth');

router.get('/', (req, res) => {
    res.render('login', {title: 'ReGen'});
})
router.get('/landingPage', (req, res) => {
    res.redirect('/landingPage');
});


module.exports = router