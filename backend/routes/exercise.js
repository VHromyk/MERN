const express = require('express');
const router = express.Router();
const {
    getExercise,
    getExerciseById,
    createExercise,
} = require('../controllers/exercise.controllers');

router.get('/', getExercise);
router.get('/:id', getExerciseById);
router.post('/', createExercise);

module.exports = router;
