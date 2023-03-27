const Admin = require('../models/adminModels')
const mailer = require('../config/passMailer')
module.exports = {
    adminLogin: async (req, res) => {
        const { email, password } = req.body
        try {
            const admin = await Admin.login(email,password)
            res.status(200).json({email, admin})
        } catch (error) {
            console.log(error);
        }
    },
    addAdmin:async(req,res)=>{
        try {
            const {name, department, password,mobile,age,email, gender} = req.body
            console.log(password,name);
            const addAdmin = new Admin({
                name, password,email,department,mobile,age,gender
            })
            await addAdmin.save()
            let mailDetails = {
                from: "alanjosephclt@gmail.com",
                to: req.body.email,
                subject: "Username and Password",
                html: `<p>Your user name and password for the Login purpose are userName- <strong>${email}<strong/> and password-<strong>${password}<strong/></p>`,
            };
            mailer.passMailer.sendMail(mailDetails, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('password mailed');
                }
            })
        } catch (error) {
            console.log(error);
        }
    },
    allAdmin:async(req, res)=>{
        try {
            const admin = await Admin.find({})
            res.status(200).json(admin)
        } catch (error) {
            console.log(error);
        }
    }
}