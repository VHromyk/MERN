const express = require('express');
const router = express.Router()
const { getUsers, getUserById, updateUserById, createUser, removeUserById } = require('../controllers/user.controllers');

router.get('/', getUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUserById);
router.delete('/:id', removeUserById);
router.post('/', createUser);


module.exports = router; 