const express = require('express');

const router = express.Router();
const isLoggedIn = require('../config/auth');
const workoutCtrl = require('../controllers/workouts')

router.get('/', isLoggedIn, workoutCtrl.wristIndex);


module.exports = router