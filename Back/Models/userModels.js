const mongoose=require("mongoose")

const ContactSchema={
    name:{type:String,require:true},
    phone:{type:String,require:true},
    email:{type:String}
}

const UserSchema=new mongoose.Schema({
    userName:{type: String,require:true,unique:true},
    contact:[ContactSchema]

})
module.exports=mongoose.model("user",UserSchema);
// module.exports=mongoose.model("Contact",ContactSchema);