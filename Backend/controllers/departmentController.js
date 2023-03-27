const Department = require('../models/departmentModels')

module.exports = {
    addDepartment: async (req, res)=>{
        try {
            const{name,beds} = req.body
            const addDepartment = new Department({
                name, beds
            })
            await addDepartment.save()
            res.status(200)

        } catch (error) {
            console.log(error);
        }
    },
    allDepartment: async(req, res)=>{
        const department =  await Department.find({})
        res.status(200).json(department)
    }
}