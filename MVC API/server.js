import express from 'express'
import userRoutes from './routes/userRoutes.js'

const app=express()

app.use('/api/users',userRoutes)
app.use(express.json())
const port=3000


app.listen(port,(req,res)=>{
    
    console.log('Server is running at port num ${port}');
    
})