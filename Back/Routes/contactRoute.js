const express = require("express")
const {addContact, getContacts,deleteContact}=require("../Controllers/contactControllers")
const router = express.Router();

router.post("/addContact",addContact)
router.get("/getContacts",getContacts)
router.delete("/deleteContact",deleteContact);
module.exports=router