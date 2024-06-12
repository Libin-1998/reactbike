var mongoose=require('mongoose')
var loginSchema=new mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    // role:{type:String,required:true},
})

module.exports=mongoose.model('log',loginSchema)