const express = require('express');

const router = express.Router();
const workoutCtrl = require('../controllers/workouts');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, workoutCtrl.index);
router.get('/createWorkout', isLoggedIn, workoutCtrl.lowbackIndex);

module.exports = router;