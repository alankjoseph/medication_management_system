const express =  require('express')
const router = express.Router()
const doctorController = require('../controllers/doctorController')

router.post('/addDoctor',doctorController.addDoctor)

module.exports = router