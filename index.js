const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
var cors = require('cors')
const bodyParser = require('body-parser');
const Role = require('./models/Role')
const { seedDatabaseWithRoles } = require('./seeders/RoleSeeder')


const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Accept, X-Requested-With, Authorization, Content-Type, x-custom-header');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    next();
});

app.get('/', (req, res, next) => {
    res.send('Hello from the base url');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    mongoose.set('useFindAndModify', false);
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`Server listening on port ${PORT}`)
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err));

db.once('open', async() => {
    require('./routes/api/authRoutes')(app)
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('../netsafari-spa/build'))

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'netsafari-spa', 'build', 'index.html'))
        });
    }

    if (await Role.isRolesCollectionEmpty()) {
        await seedDatabaseWithRoles();
    }
    console.log(`Successfully connected to the database`);
});

module.exports = app;