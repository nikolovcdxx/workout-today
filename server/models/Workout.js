const { model, Schema, Types: { ObjectId } } = require('mongoose');

const schema = new Schema({
    type: {
        type: String, enum: ['push', 'pull', 'legs'], required: [true, 'Specify the type of workout!']
    },
    exercises: {
        type: Object, requided: true
    },
    owner: { type: ObjectId, ref: 'User', required: true },
    ownerName: { type: String },
    likedBy: { type: [ObjectId], ref: 'User', default: [] },
});

const Workout = model('Workout', schema);

module.exports = Workout;