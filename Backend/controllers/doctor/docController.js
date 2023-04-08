
const Patient = require('../../models/patientModels')
const Prescription = require('../../models/prescriptionModels')
const Doctor = require('../../models/doctorModels')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}
module.exports = {

  doctorLogin: async (req, res) => {
    const { email, password } = req.body
    try {
      const doctor = await Doctor.login(email, password)
      const token = createToken(doctor._id)
      const doctorID = doctor._id
      res.status(200).json({ email, doctorID, token })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  todaysBooking: async (req, res) => {
    try {
      // const today = new Date
      // today.setHours(0, 0, 0, 0)
      // const query = { createdAt: { $gte: today } }
      // const bookings = await Patient.find( query )
      const bookings = await Patient.find({})
      if (!bookings.length === 0) {
        res.status(200).json({ msg: "no booking" })
      } else {

        res.status(200).json(bookings)
      }

    } catch (error) {
      res.status(404).json({ msg: 'not such data' })
    }
  },
  addDrugs: async (req, res) => {
    try {
      const { drugName, drugID, route, patientID } = req.body
      const addPrescription = new Prescription({
        drugName, drugID, patientID, route
      })
      await addPrescription.save()
      res.status(200)
    } catch (error) {
      console.log(error);
    }
  },
  patientDrugs: async (req, res) => {
    try {
      console.log('api callled');
      const { id } = req.params
      console.log(id)
      const drugs = await Prescription.find({ patientID: id })

      res.status(200).json(drugs)
    } catch (error) {
      console.log(error);
    }
  },
  admit: async (req, res) => {
    try {
      const { id } = req.params
      const patient = await Patient.findById(id)
      const isAdmit = patient.isAdmit ? false : true
      await Patient.findByIdAndUpdate(id, { $set: { isAdmit } })
      res.status(200).json({ success: true })

    } catch (error) {
      console.log(error);
    }
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
  deleteSingleDrug: async (req, res) => {
    try {
      const { id } = req.params
      console.log(id)
      const deleteDrug = await Prescription.deleteOne({ _id: id })
      res.status(200).json({ msg: 'Delete successful' })
    } catch (error) {
      console.log(error);
    }
  },
  getSingleDrug: async (req, res) => {
    try {
      const { id } = req.params
      const drug = await Prescription.findById(id)
      return res.status(200).json(drug)
    } catch (error) {
      console.log(error);
    }
  },
  updateDrug: async (req, res) => {
    try {
      const { id } = req.params
      const updateDrug = await Prescription.findByIdAndUpdate({ _id: id }, {
        ...req.body
      })
      console.log(updateDrug);
      if (!updateDrug) {
        return res.status(404).json({ error: "no such prescription" })
      }
      return res.status(200).json(updateDrug)
    } catch (error) {
      console.log(error)
    }
  }
}