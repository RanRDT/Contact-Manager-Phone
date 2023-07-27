const express = require("express");
const app=express();
const mongoose=require("mongoose");
const userRouts=require("./Routes/userRout");
const contactRouts=require("./Routes/contactRoute");
const port= 3007;
const cors=require("cors") 

mongoose.connect("mongodb+srv://rann123450:Ran207610759@cluster0.huzwz1c.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("succesfuly connection"))
.catch((err)=>console.log({message:"failed connection",err}));

app.use(cors());
console.log(`running port ${port}`);
app.use(express.json());

// app.get("/",(req,res)=>{res.send("hey you")});
app.use("/user",userRouts);
app.use("/contact",contactRouts);
app.listen(3007);