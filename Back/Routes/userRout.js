const express = require("express")
const {creatuser,getAll}=require("../Controllers/userControllers")
const router =express.Router();

router.post("/creat",creatuser);
// router.post("/getAll",getAll);

module.exports=router