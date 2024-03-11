const mongoose = require('mongoose');

const Schema = mongoose.Schema

const mealSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    kcal: {
        type: Number, 
        required: true
    },

    protein: {
        type: Number, 
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('meal', mealSchema)