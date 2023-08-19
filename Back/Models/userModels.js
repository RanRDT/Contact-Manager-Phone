const mongoose=require("mongoose")

const ContactSchema={
    name:{type:String,require:true},
    phone:{type:String,require:true,unique:true},
    email:{type:String}
}


const UserSchema=new mongoose.Schema({
    userName:{type: String,require:true,unique:true},
    contact:[ContactSchema],
    lastCall:[ContactSchema]

})
module.exports=mongoose.model("user",UserSchema);
