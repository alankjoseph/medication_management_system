const Patient = require('../../models/patientModels')

module.exports = {
    addPatient: async (req, res) => {
        try {
            const { name, age, bloodGroup, gender, address, bedNumber, advisingDoctor, reason } = req.body
            console.log(name, age)
            const patient = new Patient({
                name, age, bloodGroup, gender, address, bedNumber, advisingDoctor, reason
            })
            await patient.save()
            res.status(200)

        } catch (error) {
            console.log(error);
        }
    },
    allPatient: async (req, res) => {
        const patient = await Patient.find({})
        res.status(200).json(patient)
    }
}