const jwt = require('jsonwebtoken')
const SuperAdmin = require('../../models/superAdminModels')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}
module.exports = {
    superAdminLogin: async (req, res) => {
        const { email, password } = req.body
        try {
            const superAdmin = await SuperAdmin.login(email, password)
            const token = createToken(superAdmin._id)
            const superAdminID = superAdmin._id
            res.status(200).json({ email, superAdminID, token })
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    }
}