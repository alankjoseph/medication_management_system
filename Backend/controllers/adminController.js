const Admin = require('../models/adminModels')
const mailer = require('../config/passMailer')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}
module.exports = {
    adminLogin: async (req, res) => {
        const { email, password } = req.body
        try {
            const admin = await Admin.login(email, password)
            const token = createToken(admin._id)
            res.status(200).json({ email, token })
        } catch (error) {
            res.status(400).json({ error: error.message })

        }
    },
    addAdmin: async (req, res) => {

        try {
            const { name, department, password, mobile, age, email, gender } = req.body
            console.log(password, name);
            const addAdmin = new Admin({
                name, password, email, department, mobile, age, gender
            })
            await addAdmin.save()
            let mailDetails = {
                from: "alanjosephclt@gmail.com",
                to: req.body.email,
                subject: "Username and Password",
                html: `
                <div style="background-color: #f2f2f2; padding: 20px;">
                    <h1 style="color: #333333;">Welcome to Medication Management System</h1>
                    <p style="color: #666666;">Hi there,</p>
                    <p style="color: #666666;">We're excited to have you onboard! Here are some details about your account:</p>
                    <ul style="color: #666666;">
                        <li><strong>Username</strong>: ${email}</li>
                        <li><strong>Password</strong>: ${password}</li>
                    
                    </ul>
                    <p style="color: #666666;">Thanks for joining us!</p>
                </div>
                
                
                `,
            };
            mailer.passMailer.sendMail(mailDetails, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json(success)
                    console.log('password mailed');
                }
            })
        } catch (error) {
            console.log(error);
        }
    },
    allAdmin: async (req, res) => {
        try {
            const admin = await Admin.find({})
            res.status(200).json(admin)
        } catch (error) {
            console.log(error);
        }
    }
}