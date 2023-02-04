const express = require('express');

const router = express.Router();
const workoutCtrl = require('../controllers/workouts');
const isLoggedIn = require('../config/auth');

router.get('/', workoutCtrl.index);
router.get('/new', workoutCtrl.new);
router.get('/:id', workoutCtrl.show);
router.post('/', workoutCtrl.create);

module.exports = router;