const { registerUser } = require('../../controllers/AuthController')
const { registrationValidator } = require('../../validators/authValidator')


const authRoutes = (app) => {

    app.get('/', (req, res, next) => {
        return res.json({
            version: '1.0',
            description: 'Kwaba Loans Root Route'
        })
    })

    app.post('/api/v1/register', registrationValidator(), registerUser);
}

module.exports = authRoutes;