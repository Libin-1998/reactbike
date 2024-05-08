var mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:'log'},
    name:{type:String,required:true},
    phone:{type:Number,required:true},
    place:{type:String,required:true},
})
module.exports=mongoose.model('users',userSchema)