const mongoose = require('mongoose');

const Schema = mongoose;

const exerciseSchema = new Schema(
    {
        exerciseName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        previewImage: {
            type: 'image/png',
            required: true,
        },
    }
)

module.exports = mongoose.model('Exercise', exerciseSchema)