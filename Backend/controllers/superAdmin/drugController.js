const Drug = require('../../models/drugModels')

module.exports = {
    addDrug: async (req, res) => {
        try {
            const { name, route, manufaturer } = req.body
            const addDrug = new Drug({
                name, route, manufaturer
            })
            await addDrug.save()
            res.status(200).json({ success: true })
        } catch (error) {
            console.log(error);
        }
    },
    allDrug: async (req, res) => {
        try {
            const durg = await Drug.find({})
            res.status(200).json(durg)
        } catch (error) {
            console.log(error);
        }
    }

}