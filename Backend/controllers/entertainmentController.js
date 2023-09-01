const Entertainment = require('../models/entertainmentModel')
const mongoose = require('mongoose');

const getEntertainments = async (req, res)=>{
    const entertainments = await Entertainment.find({}).sort({createdAt: -1});
    if(!entertainments){
        return res.status(404).json({error: 'No files found'});
        } 
    res.status(200).json(entertainments);
}

const createEntertainments = async (req, res)=>{
    const{title,description,year,rating} = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push('title');
        }
    if(!description){
        emptyFields.push('description');
    }    
    if(!year){
        emptyFields.push('year');
    }
    if(!rating){
        emptyFields.push('rating');
    }
    if(emptyFields.length > 0){
            return res.status(400).json({error: 'Please fill in all fields',emptyFields});
        }
   
     
    try {
        const entertainment = await Entertainment.create({title,description,year,rating});
        res.status(200).json(entertainment);
    }
    catch(err) {
        res.status(400).json({error: err.message,emptyFields});
    }   
}

const getEntertainment = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'id is not a valid'});
    }

    const entertainment = await Entertainment.findById(id);
    if(!entertainment){
        return res.status(404).json({error: 'No file found'});
        } 
    res.status(200).json(entertainment);
}

const deleteEntertainment = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'id is not a valid'});
    }
    const entertainment = await Entertainment.findOneAndDelete({_id: id});
    if(!entertainment){
        return res.status(404).json({error: 'No users found'});
        }
    res.status(200).json(entertainment);
}

module.exports = {
    getEntertainments,
    createEntertainments,
    getEntertainment,
    deleteEntertainment
}