//synchronous0----------> it runs the program line by line
//process to making tea

function start(){
    const prms = new Promise((resolve,reject)=>{
    console.log("ADD MILK AND WATER IN A POT AND PUT IT ON GAS ")
       reject(new Error("fgytudhgcfngffghcfchgdfxezdsewaze"))
})
return prms
}
function SUGARTEALEAF(){
    const prms = new Promise((resolve,reject)=>{
    console.log("ADD SUGAR ,TEALEAF, ADARAK AND ELAICHI IN THE POT ")
    reject(new Error("fgytudhgcfngffghcfchgdfxezdsewaze"))
    })
    return prms
    
}

function HEATING(){
    const prms = new Promise((resolve,reject)=>{
     setTimeout(()=>{

        console.log("MAKE SURE THE FLAME IS HIGH AND COOK THE TEA RPOPERLY")
            reject(new Error("fgytudhgcfngffghcfchgdfxezd"))
    })

    },10000 )
    return prms
   

}
function serve(){
     
       console.log("BRINGS  THE CUPS AND SERVES THE TEA WITH BISCUITS")

   
   

}
 function CALL(){
    start().catch((err)=>{
        console.log(err)
    })
    .then(SUGARTEALEAF).catch((err)=>{
        console.log(err)
    })      
    .then(HEATING).catch((err)=>{
        console.log(err)
    })
    .then(serve)
   

}

CALL()


