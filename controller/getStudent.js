const studentScheme = require('../module/userScheme')

const getStudent = async (req, res) => {

    try {
        const student = await studentScheme.findById(req.params.id)
        res.status(200).json(student)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = getStudent