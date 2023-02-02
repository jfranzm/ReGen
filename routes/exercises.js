const express = require('express');

const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const isLoggedIn = require('../config/auth');

router.get('/', exercisesCtrl.index);
router.get('/new', exercisesCtrl.new);
router.get('/:id', exercisesCtrl.show);
router.post('/', exercisesCtrl.create);

module.exports = router;