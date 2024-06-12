var mongoose=require('mongoose')
const registerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    emailid:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    zip:{type:String,required:true},
    phone:{type:Number,required:true},
    dob:{type:String,required:true},
    gender:{type:String,required:true},

})
module.exports=mongoose.model('registration',registerSchema)