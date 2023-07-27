const user=require("../Models/userModels");
exports.creatuser=async(req,res)=>{
 try {
  const newUser=await user.create(req.body)
  res.status(200).json({message:"creat susscfuly",newUser})  
 } catch (err) {
    res.status(500).json({message:"faild user creation",err})
 }
};
// exports.getAll=async(req,res)=>{
//  try {
//   const getAll=await user.findOne(req.body);  
//  } catch (err) {
//     res.status(500).json("faild pull user",err)
//  }
// };