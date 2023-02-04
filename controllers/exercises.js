const Exercise = require('../models/exercise');

function index(req, res) {
    Exercise.find({}, (err, exercises) => {
        res.render('exercises/index', {title:'REGEN', exercises});
    });
};

function newExercise(req, res) {
    res.render('exercises/new', {title: 'Create an Exercise'});
};

function show(req, res) {
    Exercise.findById(req.params.id).exec((err, exercise) => {
        res.render('exercises/show', {
            exercise: 'exerciseName',
            description: 'description',
        }, {title: 'exerciseName'});
    });
};

function create(req, res) {
    const exercise = new Exercise(req.body);
    exercise.user = req.user._id;
    exercise.save((err) => {
        if (err) return res.redirect('/exercises/new');
        res.redirect(`/exercises/${exercise._id}`);
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
    new: newExercise,
    create,
    edit,
}