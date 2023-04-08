const express =  require('express')
const router = express.Router()
const nurseController = require('../controllers/nurse/nurseController')

router.get('/patients', nurseController.allPatients)
router.get('/singlePatient/:id',nurseController.singlePatient)


module.exports = router