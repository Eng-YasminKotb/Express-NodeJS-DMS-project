const express=require('express')
const app=express()

//middleware 

app.use(express.json())
const port=process.env.PORT || 3000

app.get('/',(req,res)=>{

    res.status(200).send("hello")
})
app.listen(port,()=>{
    console.log("Server Started :)");
})