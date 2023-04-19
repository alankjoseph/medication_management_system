const jwt = require('jsonwebtoken')
const Nurse = require('../../models/nurseModels')
const Patient = require('../../models/patientModels')
const Prescription = require('../../models/prescriptionModels')
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}
module.exports = {
  nurseLogin: async (req, res) => {
    const { email, password } = req.body
    try {
      const nurse = await Nurse.login(email, password)
      const token = createToken(nurse._id)
      const nurseID = nurse._id
      res.status(200).json({ email, nurseID, token })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
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
  dosage: async (req, res) => {
    try {
      const { id } = req.params
      const { firstDose, secondDose, thirdDose } = req.body;
      
      const prescription = await Prescription.findByIdAndUpdate(id, {
        $set: { 
          firstDose: firstDose, 
          secondDose: secondDose, 
          thirdDose: thirdDose 
        } 
      })
      res.status(200).json(prescription)
    } catch (error) {
      console.log(error);
    }
  },
  singleNurse: async (req, res) => {
    try {

      const { id } = req.params
      const nurse = await Nurse.findById(id)
      res.status(200).json(nurse)
    } catch (error) {
      console.log(error);
    }
  },
  changePassword: async (req, res) => {
    try {
      const { id, currentPassword, newPassword, cPassword } = req.body
      const nurse = await Nurse.findById(id)
      if (nurse.password === currentPassword) {
        const changePassword = await Nurse.findByIdAndUpdate(id, { $set: { password: newPassword } })
        res.status(200).json({ msg: 'success' })
      } else {
        res.status(404).json({ error: 'No such data' })
      }
    } catch (error) {
      res.status(404).json({error: error.message})
    }
  }

}