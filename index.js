const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('Hello from the base url');
});

const PORT = process.env.PORT || 8000;

app.listen(port, () => {
    mongoose.set('useFindAndModify', false);
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true
    })
    console.log(`Server listening on port ${PORT}`)
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err));

db.once('open', () => {
    console.log(`Successfully connected to the database`);
});

module.exports = app;