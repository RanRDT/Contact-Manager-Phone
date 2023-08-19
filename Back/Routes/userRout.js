const express = require("express")
const {creatuser,addToLastCall,getLastCall,deleteLastCall}=require("../Controllers/userControllers")
const router =express.Router();

router.post("/creat",creatuser);
router.post("/addToLastCall",addToLastCall);
router.get("/getLastcall",getLastCall);
router.delete("/deleteLastCall",deleteLastCall);

module.exports=router