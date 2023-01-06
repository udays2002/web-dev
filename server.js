// console.log("Hello ")
const express=require("express")
const app=express()

app.set("view engine",'ejs')
app.use(express.static("public"))


app.get('/',(req,res)=>{
    // console.log("here")
    //  res.status(500).json({message:"erooooor"})
    // res.send("hey")
    res.render("index",{text:"hey where are you"})
})
const userrouter=require('./routes/users')
app.use('/users',userrouter)
app.listen(3000)