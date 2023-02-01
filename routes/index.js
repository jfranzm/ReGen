var express = require('express');
var router = express.Router();
const passport = require('passport');
const isLoggedIn = require('../config/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
});
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: "select_account"
  }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/landingPage',
    failureRedirect: '/login',
  }
));
router.get('/logout', (req,res) => {
  req.logout(() => {
    res.redirect('/login');
  });
});

module.exports = router;
