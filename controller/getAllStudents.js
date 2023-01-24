const studentScheme = require('../module/userScheme')


const getAllStudnets = async(req,res)=>{
    try{
       const students =  await studentScheme.find()
        res.status(200).json(students)
    }catch(error){
        res.status(401).json({message:error.message})
    }
}

module.exports = getAllStudnets