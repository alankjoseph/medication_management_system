const Nurse = require('../models/nurseModels')
const mailer = require('../config/passMailer')
module.exports = {
    addNurse: async (req, res) => {
        try {
            const { name, department, age, mobile, email, gender, password } = req.body
            console.log(name, department, age, mobile, email, gender, password)
            const addNurse = new Nurse({
                name, department, age, mobile, email, gender, password
            })
            await addNurse.save()
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
    allNurse: async (req, res)=>{
        const nurse = await Nurse.find({})
        res.status(200).json(nurse)
    }
}