const check =(req,res,next)=>{
    console.log("Request recieved");
    console.log("Method",req.method);
    console.log("URL",req);
    next()

    
    
    
}
export default check;