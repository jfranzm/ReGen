const express = require('express');

const router = express.Router();
const workoutCtrl = require('../controllers/workouts');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, workoutCtrl.index);
router.get('/new', isLoggedIn, workoutCtrl.new);
router.get('/:id', isLoggedIn, workoutCtrl.show);
router.post('/', isLoggedIn, workoutCtrl.create);

module.exports = router;