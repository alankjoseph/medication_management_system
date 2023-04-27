const express =  require('express')
const router = express.Router()
const nurseController = require('../controllers/nurse/nurseController')
const nurseAuth = require('../middleware/nurseAuth')


router.post('/nurseLogin', nurseController.nurseLogin)
router.patch('/changePassword',nurseController.changePassword)
router.patch('/dosage/:id', nurseController.dosage)
router.use(nurseAuth)
router.get('/getNurse/:id',nurseController.singleNurse)
router.get('/patients', nurseController.allPatients)
router.get('/singlePatient/:id', nurseController.singlePatient)
router.get('/patientDrugs/:id', nurseController.patientDrugs)




module.exports = router