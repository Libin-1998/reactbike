var mongoose=require('mongoose')
var cartSchema=new mongoose.Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:'registration'},
    productId:{type:mongoose.Types.ObjectId,ref:'pards'},
    quantity:{type:Number,default:1},
    status:{type:String,default:'pending'},

})

module.exports=mongoose.model('carts',cartSchema)