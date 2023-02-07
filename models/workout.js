const mongoose = require('mongoose');

const {Schema} = mongoose;
const workoutSchema = new Schema(
    {
        exercise: [{ type: Schema.Types.ObjectId, ref: 'Exercises'}]

    }
)

module.exports = mongoose.model('Workout', workoutSchema)