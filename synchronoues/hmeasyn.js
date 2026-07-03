function start(){
    console.log("Fill the form.... ")

}

function PREPARATION(){
    setTimeout(()=>{
    console.log("Start preparation for cracking exam also practice for interview.... ")

    },40000)
}

function TakesAdmitcard(){
    setTimeout(()=>{
   
        console.log("Download admit card from the website....")

    },50000)
}


function EXAMDAY(){
    setTimeout(()=>{
       console.log("Go to give exam and after giving exam start preparation for interview....")


    },60000)
}


 function FINAL(){
    setTimeout(()=>{
       console.log(" After craking exam go for crack the interview.")


    },70000)
} 
   
 function CALL(){
    start()
    PREPARATION()
    TakesAdmitcard()
    EXAMDAY()
    FINAL()
   

}

CALL()
