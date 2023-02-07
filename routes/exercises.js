const express = require('express');

const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, exercisesCtrl.index);
router.get('/new', isLoggedIn, exercisesCtrl.new);
router.get('/:id', isLoggedIn, exercisesCtrl.show);
router.post('/', isLoggedIn, exercisesCtrl.create);
// router.post('/exercises/:id', exercisesCtrl.delete);
router.delete('/:id', exercisesCtrl.delete);
router.get('/:id/edit', isLoggedIn, exercisesCtrl.edit);
router.put('/:id', isLoggedIn, exercisesCtrl.update);

module.exports = router;