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
    Exercise.findById(req.params.id, function(err, exercise) {
        res.render('exercises/edit', {title: 'Update Exercise', exercise});
    });
};

function deleteExercise(req, res, next) {
    console.log("deleteExercise", req.params);
    Exercise.findById(req.params.id, function(err, exercise) {
        console.log('exercise', exercise, ' -- ');
        console.log("err", err);
        exercise.remove(function(err) {
            res.redirect('/exercises');
        });
    })
};

function update(req,res) {
    Exercise.findById(req.params.id, function(err, exercise) {
        exercise.save(function(err) {
            res.redirect(`/exercises/${exercise._id}`);
        });
    });
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