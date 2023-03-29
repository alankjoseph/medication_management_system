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
    },
    singlePatient: async (req, res) => {
        try {
            console.log('api called');
            const { id } = req.params
            const patient = await Patient.findById(id)
            if (!patient) {
                return res.status(404).json({ error: 'invalid id' })
            }
            return res.status(200).json({ patient })
        } catch (error) {
            console.log(error)
        }

    },
    updatePatient: async (req, res) => {
        try {
            const { id } = req.params
            console.log('hello');
            const patient = await Patient.findByIdAndUpdate({ _id: id }, {
                ...req.body
            })
            if (!patient) {
                res.status(404).json({error:"no such patient"})
            }
            return res.status(200).json(patient)
        } catch (error) {
            console.log(error)
        }
    }
}