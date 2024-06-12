var mongoose=require('mongoose')
var pardsSchema=new mongoose.Schema({
    pardsname:{type:String,required:true},
    pardscode:{type:String,required:true},
    price:{type:String,required:true},
    company:{type:String,required:true},

})

module.exports=mongoose.model('pards',pardsSchema)