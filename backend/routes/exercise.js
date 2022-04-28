const express = require('express');
const router = express.Router();
const {
    getExercise,
    getExerciseById,
    removeExerciseById,
    createExercise,
} = require('../controllers/exercise.controllers');

router.get('/', getExercise);
router.get('/:id', getExerciseById);
router.delete('/:id', removeExerciseById);
router.post('/', createExercise);

module.exports = router;
