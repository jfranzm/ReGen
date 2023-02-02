const mongoose = require('mongoose');

const Schema = mongoose;

const workoutSchema = new Schema(
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

module.exports = mongoose.model('workout', workoutSchema)