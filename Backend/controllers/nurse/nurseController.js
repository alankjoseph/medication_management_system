
const Patient = require('../../models/patientModels')
module.exports = {
  allPatients: async (req, res) => {
    const patients = await Patient.find({ isAdmit: true })
    res.status(200).json(patients)
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
  
}