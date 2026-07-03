//synchronous0----------> it runs the program line by line
//process to making tea

function start(callback){
    console.log("ADD MILK AND WATER IN A POT AND PUT IT ON GAS ")
    callback()

}

function SUGARTEALEAF(callback){
    setTimeout(()=>{
         console.log("ADD SUGAR ,TEALEAF, ADARAK AND ELAICHI IN THE POT ")
    const error=new Error("shop is closed")
    
    callback(error)

    },5000)
   

}

function HEATING(callback){

        console.log("MAKE SURE THE FLAME IS HIGH AND COOK THE TEA RPOPERLY")
        callback()

    
   

}
function serve(){
     
       console.log("BRINGS  THE CUPS AND SERVES THE TEA WITH BISCUITS")

    
   

}
 function CALL(){
    start(()=>{
        SUGARTEALEAF((error)=>{
            if(error){
                console.log(error);
                
            }
            HEATING(()=>{
        console.log("task is completed");
    })
        })

    })
    
    
    serve()
   

}

CALL()


