const studentScheme = require('../module/userScheme')


const updateStudent = async(req,res)=>{
    try{
        await studentScheme.updateOne({_id:req.params.id},req.body)
        res.status(200).json({message:"student updated"})
    }catch(error){
        res.status.json({message:error.message})
    }

}

module.exports = updateStudent