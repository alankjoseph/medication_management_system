const express =  require('express')
const router = express.Router()
const patientController = require('../controllers/admin/patientController')

router.post('/addPatient', patientController.addPatient)
router.get('/patient', patientController.allPatient)

module.exports = router