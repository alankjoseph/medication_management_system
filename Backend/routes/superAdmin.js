const express =  require('express')
const router = express.Router()
const departmentController = require('../controllers/departmentController')
const doctorController = require('../controllers/doctorController')


router.post('/addDoctor',doctorController.addDoctor)
router.post('/addDepartment',departmentController.addDepartment)
router.get('/department',departmentController.allDepartment)
router.get('/doctors',doctorController.allDoctor)

module.exports = router