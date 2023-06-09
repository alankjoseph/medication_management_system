const Doctor = require('../models/doctorModels')
const mailer = require('../config/passMailer')


module.exports = {
    doctorLogin: async (req, res) => {
        
    },
    addDoctor: async (req, res) => {
        try {
            const { name, department, age, mobile, email, gender, password } = req.body
            console.log(name, department, age, mobile, email, gender, password)
            const addDoc = new Doctor({
                name, email, password, gender, age, mobile, department
            })
            await addDoc.save()
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
            console.log(error)
        }
    },
    allDoctor: async (req, res) => {
        const doctors = await Doctor.find({})
        res.status(200).json(doctors)
    },
    blockDoctor: async (req, res) => {
        try {
            console.log('api called');
            const { id } = req.params;
            const doctor = await Doctor.findById(id);
            const isDisabled = doctor.isDisabled ? false : true;
            await Doctor.findByIdAndUpdate(id, { $set: { isDisabled } });
            res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false });
        }
        
       
    },
    
}