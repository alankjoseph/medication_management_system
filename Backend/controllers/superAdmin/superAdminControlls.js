const jwt = require('jsonwebtoken')
const superAdmin = {
    email: 'superadmin@gmail.com',
    password: 'super@1234'
}
const createToken = (email) => {
    return jwt.sign({email},process.env.SECRET,{expiresIn:'3d'})
}
module.exports = {
    superAdminLogin: async (req, res) => {
        const { email, password } = req.body
        try {
            if (!email || !password) {
                throw Error('All field must be filled')
            }
            if (email != superAdmin.email) {
                throw Error('Invalid email or password')
            }
            if (password != superAdmin.password) {
                throw Error('Invalid email or password')
            }

            if (email === superAdmin.email && password === superAdmin.password) {
                const token = createToken(email)
                res.status(200).json({email,token})
            }
        } catch (error) {
            res.status(404).json({error: error.message})
        }
     }
}