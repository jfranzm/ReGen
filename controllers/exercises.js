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
    Exercise.findById(req.params.id, function(err, exercise) {
        if(!exercise.user.equals(req.user._id)) return res.redirect('/exercises');
        exercise.remove(function(err) {
            res.redirect('/exercises');
        })
    })
};

function update(req,res) {
    Exercise.findById(req.params.id, function(err, exercise) {
        if(!exercise.user.equals(req.user._id)) return res.redirect('/exercises');
        exercise.save(function(err) {
            res.redirect(`/exercises/${exercise._id}`);
        })
    })
}
module.exports = {
    index,
    show,
    new: newExercise,
    create,
    edit,
    delete: deleteExercise,
    update,
}