const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String, required: [true, 'Email is required']
    },
    hashedPassword: { type: String, minLength: [3, 'Password must be atleast 3 characters long'] }
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;