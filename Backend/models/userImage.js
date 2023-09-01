const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userImageSchema = new Schema({
    userImage: { 
           type: String
     }
  },{timestamps: true});
  
  module.exports = mongoose.model('UserImage', userImageSchema);