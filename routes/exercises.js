const express = require('express');

const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, exercisesCtrl.index);
router.get('/new', isLoggedIn, exercisesCtrl.new);
router.get('/:id', isLoggedIn, exercisesCtrl.show);
router.post('/', isLoggedIn, exercisesCtrl.create);

module.exports = router;