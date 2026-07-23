import users from '../model/userModel.js'
export const getUser=(req,res)=>{
    res.status(200).json({
        success:true,
        message:'All user fetched',
        data:"users"
    })

}


    
