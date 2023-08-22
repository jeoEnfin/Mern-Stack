const mongoose = require('mongoose');
const User = require('../models/userModel');

const getUsers = async (req ,res) => {
    res.status(200).json('getUsers');
}

const createUser = async (req ,res) => {
    const{username,email,description} = req.body

    let emptyFields = []

    if(!username){
        emptyFields.push('title');
        }
    if(!email){
        emptyFields.push('load');
    }    
    if(!description){
        emptyFields.push('reps');
    }
    if(emptyFields.length > 0){
            return res.status(400).json({error: 'Please fill in all fields',emptyFields});
        }

    
        try {
            const user = await User.create({username,email,description});
            res.status(200).json(user);
        }
        catch(err) {
            res.status(400).json({error: err.message});
        }    
};

const getUser = async (req ,res) => {
    res.status(200).json('getUser'+req.params.id);
}

module.exports = {
    getUsers,
    createUser,
    getUser
}