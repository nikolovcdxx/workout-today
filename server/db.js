const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/workout';

const connectToMongo = async () => {
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectToMongo;