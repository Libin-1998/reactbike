var mongoose=require('mongoose')
var volunteerSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    phone:{type:Number,required:true},
    dob:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true},
    image:{type:String,required:true},
})

module.exports=mongoose.model('volunteer',volunteerSchema)