const Workout = require('../models/workout');

function index(req, res) {
    Workout.find({}, (err, workouts) => {
        res.render('createWorkout/index', {title:'Tell us where it hurts'});
    });
};

function kneeIndex(req, res) {
    Workout.find({}, (err, workouts) => {
        res.render('createWorkout/knee/index', {title:'Knee'});
    });
};

function lowbackIndex(req, res) {
    Workout.find({}, (err, workouts) => {
        res.render('createWorkout/lowback/index', {title:'Low Back'});
    });
};

function wristIndex(req, res) {
    Workout.find({}, (err, workouts) => {
        res.render('createWorkout/wrist/index', {title:'Wrist'});
    });
};

function shoulderIndex(req, res) {
    Workout.find({}, (err, workouts) => {
        res.render('createWorkout/shoulder/index', {title:'Shoulder'});
    });
};
module.exports = {
    index,
    kneeIndex,
    lowbackIndex,
    wristIndex,
    shoulderIndex,
}