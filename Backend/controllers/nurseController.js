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
                html: `
                <div>
                <div>Medication management System</div>

                <p> userName- <strong>${email}<strong/> and password-<strong>${password}<strong/></p>

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
    allNurse: async (req, res)=>{
        const nurse = await Nurse.find({})
        res.status(200).json(nurse)
    },
    blockNurse: async (req, res) => {
        try {
            console.log('api called');
            const { id } = req.params;
            console.log(id);
            const nurse = await Nurse.findById(id);
            const isDisabled = nurse.isDisabled ? false : true;
            await Nurse.findByIdAndUpdate(id, { $set: { isDisabled } });
            res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false });
        }
        
       
    }
}