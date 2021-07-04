const { registerUser, loginUser } = require('../../controllers/AuthController')
const { registrationValidator, loginValidator } = require('../../validators/authValidator')


const authRoutes = (app) => {

    app.get('/', (req, res, next) => {
        return res.json({
            version: '1.0',
            description: 'Kwaba Loans Root Route'
        })
    })

    app.post('/api/v1/register', registrationValidator(), registerUser);
    app.post('/api/v1/login', loginValidator(), loginUser);
}

module.exports = authRoutes;