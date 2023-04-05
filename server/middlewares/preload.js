const { getById } = require('../services/workout');


module.exports = () => async (req, res, next) => {
    const id = req.params.id;
    try {
        const workout = await getById(id).lean();
        workout._ownerId = workout.owner;
        res.locals.workout = workout;
        next();
    } catch (err) {
        res.status(404).json({ msg: 'Record not found' });
    }
}; 