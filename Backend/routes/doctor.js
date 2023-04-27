const express =  require('express')
const router = express.Router()
const docController = require('../controllers/doctor/docController')
const doctorAuth = require('../middleware/doctorAuth')
const upload = require('../middleware/multer')
router.get('/download-pdf',docController.reportDownload)
router.post('/doctorLogin', docController.doctorLogin)
router.patch('/updateDrug/:id', docController.updateDrug)
router.patch('/admit/:id', docController.admit)
router.patch('/markDuty/:id',docController.markDuty)
router.patch('/changePassword', docController.changePassword)
router.patch('/complete/:id',docController.completed)
router.use(doctorAuth)
router.get('/getBooking', docController.todaysBooking)
router.get('/getDoctor/:id',docController.singleDoctor)
router.post('/addDrugs', docController.addDrugs)
router.get('/patientDrugs/:id', docController.patientDrugs)
router.get('/singlePatient/:id',docController.singlePatient)
router.delete('/deleteDrug/:id', docController.deleteSingleDrug)
router.get('/singleDrug/:id', docController.getSingleDrug)
router.get('/myPatients', docController.myPatients)
router.get('/medicationTime/:id', docController.medicationTime)
router.post('/upload/:id',upload.single('pdf'),docController.fileUpload)


module.exports = router