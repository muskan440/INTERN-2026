function start(callback){
    console.log("Fill the form.... ")
    callback()

}

function PREPARATION(callback){
    setTimeout(()=>{
    console.log("Start preparation for cracking exam also practice for interview.... ")
     callback()
    },2000)
}

function TakesAdmitcard(callback){
    setTimeout(()=>{
   
        console.log("Download admit card from the website....")
            callback()
    })
}


function EXAMDAY(callback){
    setTimeout(()=>{
       console.log("Go to give exam and after giving exam start preparation for interview....")
            callback()

    },2000)
}


 function FINAL(callback){
    setTimeout(()=>{
       console.log(" After craking exam go for crack the interview.")
       callback()


    },1000)
} 
   
 function CALL(){
    start()
    PREPARATION(()=>{
        TakesAdmitcard( ()=>{
            EXAMDAY (()=>{
                FINAL(()=>{
                    console.log(Process Complete);
                    
                })
            })
        })

    })
    
    
   

}

CALL()
