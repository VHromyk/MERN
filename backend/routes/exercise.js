const express = require('express');
const router = express.Router();
const {
    getExercises,
    createExercise,
} = require('../controllers/exercise.controllers');

router.get('/', getExercises);
router.post('/', createExercise);

module.exports = router;
