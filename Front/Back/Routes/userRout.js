const express = require("express")
const {creatuser,addToLastCall,getLastCall}=require("../Controllers/userControllers")
const router =express.Router();

router.post("/creat",creatuser);
router.post("/addToLastCall",addToLastCall);
router.get("/getLastcall",getLastCall);

module.exports=router