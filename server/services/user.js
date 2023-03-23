const User = require('../models/User');
const { hash, compare } = require('bcrypt');

async function register(username, password) {
    const existing = await getUserByUsername(username);

    if (existing) {
        throw new Error('Username is taken');
    }

    
    const hashedPassword = await hash(password, 10);
    
    const user = new User({
        username,
        password: hashedPassword
    });
    await user.save();

    return user;
}

async function login(username, password) {
    const user = await getUserByUsername(username);

    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const hasMatch = await compare(password, user.password);
    if (!hasMatch) {
        throw new Error('Incorrect username or password');
    }

    return user;
}

async function getUserByUsername(username) {
    const user = await User.findOne({ username: new RegExp(`^${username}$`, 'i') });

    return user;
}

module.exports = {
    login,
    register
};