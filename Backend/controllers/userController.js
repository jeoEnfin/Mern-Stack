const mongoose = require('mongoose');
const User = require('../models/userModel');

const getUsers = async (req ,res) => {
    const users = await User.find({}).sort({createdAt: -1});
    if(!users){
        return res.status(404).json({error: 'No users found'});
        } 
    res.status(200).json(users);
}

const createUser = async (req ,res) => {
    const{username,email,description} = req.body

    let emptyFields = []

    if(!username){
        emptyFields.push('username');
        }
    if(!email){
        emptyFields.push('email');
    }    
    if(!description){
        emptyFields.push('description');
    }
    if(emptyFields.length > 0){
            return res.status(400).json({error: 'Please fill in all fields',emptyFields});
        }

    
        try {
            const user = await User.create({username,email,description});
            res.status(200).json(user);
        }
        catch(err) {
            res.status(400).json({error: err.message,emptyFields});
        }    
};

const getUser = async (req ,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'id is not a valid'});
    }

    const user = await User.findById(id);
    if(!user){
        return res.status(404).json({error: 'No user found'});
        } 
    res.status(200).json(user);
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'id is not a valid'});
    }
    const user = await User.findOneAndDelete({_id: id});
    if(!user){
        return res.status(404).json({error: 'No users found'});
        }
    res.status(200).json(user);
}

const updateUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'id is not a valid'});
    }
    const user = await User.findOneAndUpdate({_id: id},{...req.body});
    if(!user){
        return res.status(404).json({error: 'No users found'});
        }
    res.status(200).json(user);
}

module.exports = {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser
}