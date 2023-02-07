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
        imgLink: {
            type: String,
            required: true,
        },
        target: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Exercise', exerciseSchema);