var mongoose=require('mongoose')
var cartSchema=new mongoose.Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:'log'},
    productId:{type:mongoose.Types.ObjectId,ref:'pards'},
    quantity:{type:String,required:true},
    status:{type:String,required:true},
})

module.exports=mongoose.model('carts',cartSchema)