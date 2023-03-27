const express =  require('express')
const router = express.Router()
const departmentController = require('../controllers/departmentController')
const doctorController = require('../controllers/doctorController')
const adminController = require('../controllers/adminController')
const nurseController = require('../controllers/nurseController')


router.post('/addDoctor',doctorController.addDoctor)
router.post('/addDepartment',departmentController.addDepartment)
router.post('/addNurse', nurseController.addNurse)
router.post('/adminLogin',adminController.adminLogin)
router.post('/addAdmin',adminController.addAdmin)
router.get('/department',departmentController.allDepartment)
router.get('/doctors',doctorController.allDoctor)
router.get('/nurse',nurseController.allNurse)
router.get('/admin',adminController.allAdmin)

module.exports = router