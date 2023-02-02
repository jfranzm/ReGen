const express = require('express');
const passport = require('passport');
const router = express.Router();
const isLoggedIn = require('../config/auth');

router.get('/', (req, res) => {
    res.render('login', {title: 'ReGen'});
})
router.get('/landingPage', (req, res) => {
    res.redirect('/landingPage');
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
      failureRedirect: '/login'
    }
  ));
router.get('/logout', (req,res) => {
    req.logout(() => {
      res.redirect('/login');
    });
  });

module.exports = router