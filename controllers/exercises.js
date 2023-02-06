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
    Exercise.findById(req.params.id, function(err, exercise) {
        res.render('exercises/show', {title: 'Exercise Detail', exercise});
    })
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

function deleteExercise(req, res, next) {
    Exercise.findOne({
        'exercises._id': req.params.id,
        'exercises.user': req.user._id,
    })
    .then((exercise) => {
        if (!exercise) return res.redirect(`/exercises/${exercise._id}`);
        exercise.remove(req.params.id);
        exercise
            .save()
            .then(() => res.redirect(`/exercises/${exercise._id}`))
            .catch((err) => next(err));
    })
    .catch((err) => {
        next(err);
    });
}
module.exports = {
    index,
    show,
    new: newExercise,
    create,
    edit,
    delete: deleteExercise
}