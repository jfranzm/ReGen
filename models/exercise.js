const mongoose = require('mongoose');

const {Schema} = mongoose;

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
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Exercise', exerciseSchema);