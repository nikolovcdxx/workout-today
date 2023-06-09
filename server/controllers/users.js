const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { register, login, logout } = require('../services/user');

router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password.trim() === '') {
            throw new Error('Password is required');
        } else if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match');
        }

        const result = await register(req.body.username.trim().toLowerCase(), req.body.password.trim());
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ msg: err.message });
    }
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        const result = await login(req.body.username.trim().toLowerCase(), req.body.password.trim());
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ msg: err.message });
    }
});

router.get('/logout', (req, res) => {
    logout(req.user?.token);
    res.status(204).end();
});

module.exports = router;