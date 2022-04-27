const Exercise = require('../models/exercise.model.js');

const getExercise = (req, res) => {
    Exercise.find()
        .then((exercises) => res.status(200).json({success: true, data: exercises}))
        .catch((err) => res.status(400).json(`Error ${err}`));
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

module.exports = { getExercise, createExercise };

