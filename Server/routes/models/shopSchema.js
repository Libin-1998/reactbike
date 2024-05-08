var mongoose=require('mongoose')
const shopSchema=new mongoose.Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:'log'},
    pardsname:{type:String,required:true},
    code:{type:Number,required:true},
    price:{type:Number,required:true},


})

module.exports=mongoose.model('shop',shopSchema)