const mongoose = require('mongoose');

const {Schema} = mongoose;

const workoutSchema = new Schema(
    {
        bodyPart: {
            type: String,
            required: true,
            unique: true,
        },
        typesOfInjury: {
            type: String,
            required: true,
        },
        
    }
)

module.exports = mongoose.model('workout', workoutSchema)