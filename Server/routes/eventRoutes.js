var express=require('express')
var mongoose=require('mongoose')
const eventSchema = require('./models/eventSchema')

var eventRoutes=express.Router()

eventRoutes.post('add-details',async(req,res)=>{
    const add={
        event_name:req.body.event_name,
        date:req.body.date,
        time:req.body.time,
        fee:req.body.fee,
        place:req.body.place,
    }
    const saved=eventSchema(events).save()
    console.log(saved);

if(saved){
    res.status(201).json({
        success:true,
        error:false,
        data:saved,
        message:'saved successfully'
    })
}
else{
    res.status(400).json({
        success:false,
        error:true,
        message:'not saved'
    })
}
})






module.exports=eventRoutes;