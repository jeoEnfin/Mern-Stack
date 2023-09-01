const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entertainmentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }

},{timestamps: true});

module.exports = mongoose.model('Entertainment', entertainmentSchema);
