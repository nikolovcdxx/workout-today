const router = require('express').Router();
const { register, login } = require('../services/user');


router.post('/login', async (req, res) => {
    try {
        const user = await login(req.body.username, req.body.password);
        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
});

router.post('/register', async (req, res) => {
    try {
        if (req.body.password.trim() === '') {
            throw new Error('Password is required');
        } else if (req.body.password !== req.body.repass) {
            throw new Error('Passwords don\'t match');
        }

        const user = await register(req.body.username, req.body.password);

        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;