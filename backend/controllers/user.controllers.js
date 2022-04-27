const User = require('../models/user.model')


const getUsers = (req, res) => {
    User.find()
        .then((users) =>
            res
                .status(200)
                .json({ success: true, data: users })
        )
        .catch((err) => res.status(400).json(`Error ${err}`));
}

const getUserById = (req, res) => {
    const { id } = req.params;
    User.findById(id)
        .then((user) =>
            res.status(200).json({ success: true, data: user })
        )
        .catch((err) => res.status(400).json(`Error ${err}`));
}

const updateUserById = (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    User.findByIdAndUpdate(id, username).then((el) => {
        el.username = username;
        el.save()
            .then(() =>
                res.json({
                    success: true,
                    data: `User with id ${id} was updated`,
                })
            );

        })
        .catch((err) => res.status(400).json(`Error ${err}`));
};

const removeUserById = (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id)
        .then(() => res.status(200).json({ success: true, data: `User with id: ${id} was deleted` }))
        .catch((err) => res.status(400).json(`Error ${err}`));
};

const createUser = (req, res) => {
    const { username } = req.body;
    const newUser = new User({ username });
    newUser
        .save()
        .then(() => res.status(201).json({success: true, data: `Username ${username} was created!`}))
        .catch((err) => res.status(400).json(`Error ${err}`));
}


module.exports = {getUsers, getUserById, createUser, updateUserById, removeUserById};