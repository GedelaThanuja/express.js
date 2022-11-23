const express=require("express")
const app=express()
const cors=require("cors")
const port=4215;
const emp={id:2,name:"user",position:"CEO"}
const students=require("./data.js")
app.get("/",(req,res)=>{
	res.send("hi i am Server")
})

app.use(cors())

app.get("/user",(req,res)=>{
	res.send("how are you")
})

app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})

app.listen(port,()=>console.log("Server is started at port"))