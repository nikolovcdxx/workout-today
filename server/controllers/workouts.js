const router = require('express').Router();
const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const api = require('../services/workout');

router.get('/', async (req, res) => {
    const data = await api.getAll();
    res.json(data);
});

router.post('/', isAuth(), async (req, res) => {
    const workout = {
        type: req.body.type,
        exercises: req.body.exercises,
        owner: req.user._id
    };

    try {
        const result = await api.create(workout);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ msg: err.message });
    }

});

router.get('/:id', preload(), (req, res) => {
    const workout = res.locals.workout;
    res.json(workout);
});

router.put('/:id', isAuth(), preload(), isOwner(), async (req, res) => {
    const workoutId = req.params.id;
    const workout = {
        type: req.body.type,
        exercises: req.body.exercises,
        ownerName: req.body.ownerName,
    };

    try {
        const result = await api.update(workoutId, workout);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ msg: err.message });
    }
});

router.delete('/:id', isAuth(), preload(), isOwner(), async (req, res) => {
    const workoutId = req.params.id;
    await api.deleteById(workoutId);

    res.status(204).end();
});

router.post('/:id/like', isAuth(), preload(), async(req, res) => {
    const workoutId = req.params.id;
    const userId = req.body.userId;
    await api.like(workoutId, userId);

    res.json({});
});


module.exports = router;