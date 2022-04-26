const User = require('../models/user.model')


const getUsers = (req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).json(`Error ${err}`))
}

const createUser = (req, res) => {
    const { username } = req.body;
    const newUser = new User({ username });
    newUser
        .save()
        .then(() => res.status(201).json(newUser))
        .catch((err) => res.status(400).json(`Error ${err}`));

}


module.exports = {getUsers, createUser};