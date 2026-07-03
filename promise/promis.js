//synchronous0----------> it runs the program line by line
//process to making tea

function start(){
    const prms = new Promise((resolve,reject)=>{
    console.log("ADD MILK AND WATER IN A POT AND PUT IT ON GAS ")
        resolve()
})
return prms
}
function SUGARTEALEAF(){
    const prms = new Promise((resolve,reject)=>{
    console.log("ADD SUGAR ,TEALEAF, ADARAK AND ELAICHI IN THE POT ")
    resolve()
    })
    return prms
}

function HEATING(){
    const prms = new Promise((resolve,reject)=>{

    setTimeout(()=>{

        console.log("MAKE SURE THE FLAME IS HIGH AND COOK THE TEA RPOPERLY")
            resolve()
    })

    },10000 )
    return prms
   

}
function serve(){
     
       console.log("BRINGS  THE CUPS AND SERVES THE TEA WITH BISCUITS")

   
   

}
 function CALL(){
    start().then(SUGARTEALEAF).then(HEATING).then(serve)
   

}

CALL()


