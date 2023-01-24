const studentScheme = require('../module/userScheme')

const addStudent = async(req,res)=>{
    let newStudent = new studentScheme(req.body)
    let existStudent 
    try{
        existStudent = await studentScheme.findOne({firstName:newStudent.firstName,email:newStudent.email},{"newStudnet.firstName":1,"newStudent.lastName":1})
    }catch(error){
        console.log("error while existinh user", error)
    }

    if(existStudent){
        return res.status(400).json({message:"student already exist please add diffrent student.."})
    }
    
    try{
        await newStudent.save()
        res.status(200).json(newStudent)
    }catch(error){
        res.status(400).json({message:error.message})
    }

}

module.exports = addStudent