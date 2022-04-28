const Exercise = require('../models/exercise.model.js');

const getExercise = (req, res) => {
    Exercise.find()
        .then((exercises) => res.status(200).json({success: true, data: exercises}))
        .catch((err) => res.status(400).json(`Error ${err}`));
};

const getExerciseById = (req, res) => {
    const { id } = req.params;
    Exercise.findById(id).then(exercise => {
        if (!exercise) {
            res.status(404).json({ success: false, data: `Exercise with id ${id} wasn't founded` })
        } else {
            res.status(200).json({ success: true, data: exercise })
        }
    }).catch((error) => res.status(404).json(`Erorr ${error}`))
}

const removeExerciseById = (req, res) => {
    const { id } = req.params;
    Exercise.findByIdAndDelete(id)
        .then(res.status(200).json({succes: true, data: `Exercise with id ${id} was deleted`}))
        .catch((error) => res.status(404).json(`Erorr ${error}`));
};

const createExercise = (req, res) => {
    const { username, description } = req.body;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({ username, description, duration, date });
    newExercise
        .save()
        .then(() => res.status(201).json({success: true, data: newExercise}))
        .catch((err) => res.status(400).json(`Error ${err}`));
};

module.exports = { getExercise, getExerciseById, removeExerciseById, createExercise };

