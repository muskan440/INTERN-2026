//synchronous0----------> it runs the program line by line
//process to making tea

function start(){
    console.log("ADD MILK AND WATER IN A POT AND PUT IT ON GAS ")

}

function SUGARTEALEAF(){
    console.log("ADD SUGAR ,TEALEAF, ADARAK AND ELAICHI IN THE POT ")

}

function HEATING(){
    setTimeout(()=>{
        console.log("MAKE SURE THE FLAME IS HIGH AND COOK THE TEA RPOPERLY")

    },10000 )
   

}
function serve(){
     setTimeout(()=>{
       console.log("BRINGS  THE CUPS AND SERVES THE TEA WITH BISCUITS")

    },40000 )
   

}
 function CALL(){
    start()
    SUGARTEALEAF()
    HEATING()
    serve()
   

}

CALL()


