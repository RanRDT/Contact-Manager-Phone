const express = require("express")
const {addContact, getContacts}=require("../Controllers/contactControllers")
const router = express.Router();

router.post("/addContact",addContact)
router.get("/getContacts",getContacts)

module.exports=router