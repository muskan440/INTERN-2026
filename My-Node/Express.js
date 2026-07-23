import express from 'express'

const app=express()


app.listen(2000,()=>{
    console.log("server is running at port num. 2000");

    
})

// app.get('/',(req,res)=>{
//     res.send("I create a  express server")
// })

// app.get('/product',(req,res)=>{
//     res.send("I create a  express server by the product method")
// })


// app.post('/login',(req,res)=>{
//     res.send("I logged in successfully")0
// })

// app.use(express.json())
// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     res.send('req.body')
    
// })

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post('/signin',(req,res)=>{
    console.log(req.body);
    res.send({
        message:"data is sent",
        data:req.body
    })
    
})