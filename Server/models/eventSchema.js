var mongoose=require('mongoose')
var evevtSchema=new mongoose.Schema({
    event_name:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    fee:{type:Number,require:true},
    place:{type:String,required:true},
    image:{type:String,required:true},
})

module.exports=mongoose.model('events',evevtSchema)