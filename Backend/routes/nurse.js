const express =  require('express')
const router = express.Router()
const nurseController = require('../controllers/nurse/nurseController')
const nurseAuth = require('../middleware/nurseAuth')


router.post('/nurseLogin', nurseController.nurseLogin)
router.use(nurseAuth)
router.get('/patients', nurseController.allPatients)
router.get('/singlePatient/:id', nurseController.singlePatient)
router.patch('/dosage/:id',nurseController.dosage)



module.exports = router