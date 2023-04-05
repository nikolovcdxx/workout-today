const Workout = require('../models/Workout');
const User = require('../models/User');

async function getAll() {
    return Workout.find({});
}

async function create(workout) {
    const result = new Workout(workout);
    await result.save();
    return result;
}

function getById(id) {
    return Workout.findById(id);
}

async function update(id, workout) {
    const existing = await Workout.findById(id);
    existing.type = workout.type;
    existing.exercises = workout.exercises;

    await existing.save();
    return existing;
}

async function deleteById(id) {
    await Workout.findByIdAndDelete(id);
}

async function getOwnerUsername(ownerId) {
    const data = await User.findById(ownerId);
    return { username: data.username };
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById,
    getOwnerUsername
};
