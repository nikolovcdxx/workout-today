const express = require('express');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');
const auth = require('./middlewares/auth');

const userController = require('./controllers/users');
//const workoutController = require('./controllers/workout');

const connectionString = 'mongodb://localhost:27017/workout';
const port = 3005;

start();

async function start() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        });
    } catch (err) {
        console.error('Database connection failed');
        process.exit(1);
    }

    const app = express();
    app.use(cors());
    app.use(auth());

    app.use(express.json());
    app.get('/', (req, res) => {console.log(req.user); res.json('Hello'); });
    app.use('/users', userController);

    app.listen(port, () => {
        console.log('Database listening at http://localhost:3005');
    });
}





