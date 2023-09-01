const mongoose = require('mongoose');
const UserImage = require('../models/userImage')

const createUserImage = async (req, res) => {
    const {userImage} = req.body;
  
    try {
        const userimage = await UserImage.create({userImage});
        res.status(200).json(userimage);
      res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

const getUserImage = async (req, res) => {
    const userImage = await UserImage.find({}).sort({createdAt: -1});
    if(!userImage){
        return res.status(404).json({error: 'No users found'});
        } 
    res.status(200).json(userImage);
};

module.exports = {createUserImage,getUserImage}
