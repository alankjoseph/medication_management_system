const express =  require('express')
const router = express.Router()
const patientController = require('../controllers/admin/patientController')

router.post('/addPatient', patientController.addPatient)
router.get('/patient', patientController.allPatient)
router.get('/singlePatient/:id', patientController.singlePatient)
router.patch('/updatePatient/:id',patientController.updatePatient)

module.exports = router