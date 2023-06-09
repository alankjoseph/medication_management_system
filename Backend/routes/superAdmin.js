const express =  require('express')
const router = express.Router()
const departmentController = require('../controllers/departmentController')
const doctorController = require('../controllers/doctorController')
const adminController = require('../controllers/adminController')
const nurseController = require('../controllers/nurseController')
const superController = require('../controllers/superAdmin/superAdminControlls')
const drugController = require('../controllers/superAdmin/drugController')
const superAdminAuth = require('../middleware/superAuth')
router.post('/superAdminLogin', superController.superAdminLogin)
router.post('/adminLogin', adminController.adminLogin)
router.patch('/blockDoctor/:id', doctorController.blockDoctor)
router.patch('/blockNurse/:id', nurseController.blockNurse)
router.patch('/blockAdmin/:id',adminController.blockAdmin)
router.use(superAdminAuth)
router.post('/addDoctor',doctorController.addDoctor)
router.post('/addDepartment',departmentController.addDepartment)
router.post('/addNurse', nurseController.addNurse)
router.post('/addDrug',drugController.addDrug)
router.post('/addAdmin',adminController.addAdmin)
router.get('/department',departmentController.allDepartment)
router.get('/doctors', doctorController.allDoctor)
router.get('/nurse',nurseController.allNurse)
router.get('/admin', adminController.allAdmin)
router.get('/drugs',drugController.allDrug)

module.exports = router