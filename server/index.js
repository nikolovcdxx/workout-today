const express = require('express');
const connectToMongo = require('./database');

const app = express();
const port = 3005;
connectToMongo();

app.use(express.json());

app.use('/users', require('./routes/auth'));

app.listen(port, () => {
    console.log('Database listening at http://localhost:3005');
});