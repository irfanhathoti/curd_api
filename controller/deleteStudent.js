const studentScheme = require('../module/userScheme')


const deleteStudent = async(req,res)=>{
    try{
        await studentScheme.deleteOne({_id:req.params.id})
        res.status(201).json({message:"student detail deleted."})
    }
    catch(error){
        res.status(400).json({message:error.message})
        
    }

}
module.exports = deleteStudent