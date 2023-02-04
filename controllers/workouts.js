const Workout = require('../models/workout');

function index(req, res) {
    Workout.find({}, (err, workouts) => {
        res.render('createWorkout/index', {title:'Tell us where it hurts', workouts});
    });
};

function newWorkout(req, res) {
    res.render('createWorkout/new', {title: 'add a new body part'})
};

function show(req, res) {
    Workout.findById(req.params.id).exec((err, exercise) => {
        res.render('createWorkout/show', {
        
        });
    });
};

function create(req, res) {
    const bodyPart = new bodyPart(req.body);
    bodyPart.user = req.user._id;
    bodyPart.save((err) => {
        if (err) return res.redirect('/createWorkout/new');
        res.redirect(`/createWorkout/${createWorkout._id}`);
    });
};

function edit(req, res) {
    Exercise.findById(req.params.id, (err, exercise) => {
        if(!exercise.user.equals(req.user._id)) return res.redirect('/exercises');
        res.render('exercises/edit', {exercise});
    });
};

module.exports = {
    index,
    show,
    new: newWorkout,
    create,
    edit,
}