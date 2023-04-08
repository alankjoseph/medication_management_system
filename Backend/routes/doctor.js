const express =  require('express')
const router = express.Router()
const docController = require('../controllers/doctor/docController')

router.post('/doctorLogin',docController.doctorLogin)

router.get('/getBooking', docController.todaysBooking)
router.post('/addDrugs', docController.addDrugs)
router.get('/patientDrugs/:id', docController.patientDrugs)
router.get('/singlePatient/:id',docController.singlePatient)
router.patch('/admit/:id', docController.admit)
router.delete('/deleteDrug/:id', docController.deleteSingleDrug)
router.get('/singleDrug/:id', docController.getSingleDrug)
router.patch('/updateDrug/:id',docController.updateDrug)
module.exports = router