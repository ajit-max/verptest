import express from 'express';
const app = express();

app.get("/",(req,res)=>{
    res.json({
        message:"Api Working Bhai!!",
        success:true
    })
})


app.listen(3000,()=>{
    console.log("App Running On Port",3000);
})