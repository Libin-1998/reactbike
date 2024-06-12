var express=require('express')
var mongoose=require('mongoose')
var bcrypt=require('bcryptjs')
const registerSchema = require('../models/registerSchema')
var registerRoutes=express.Router()


registerRoutes.post('/create',async(req,res)=>{
    const hashedPassword=await bcrypt.hash(req.body.password,12)
    const register={
        name:req.body.name,
        password:hashedPassword,
        emailid:req.body.emailid,
        city:req.body.city,
        phone:req.body.phone,
        dob:req.body.dob,
        zip:req.body.dob,
        state:req.body.state,
        gender:req.body.gender,

    }
    const save=await registerSchema(register).save()
    if(save){
        res.status(201).json({
            success:true,
            error:false,
            message:'save successfully',
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'error to save'
        })
    }
})

registerRoutes.get('/views',async(req,res)=>{
    try {
        const dataviews=await registerSchema.find()
        console.log(dataviews);
    if(dataviews){
       return res.status(200).json({
            success:true,
            error:false,
            data:dataviews,
            message:'view successfully',

        })
    }
    else{
       return res.status(400).json({
            success:false,
            error:true,
            message:'error to view'
        })
    }
    } catch (error) {
        
    }
})

registerRoutes.post('/update/:id',async(req,res)=>{
    const olddata=await registerSchema.findOne({_id:req.params.id})
    const update={
        name:req.body.name?req.body.name:olddata.name,
        password:req.body.password?req.body.password:olddata.password,
        emailid:req.body.emailid?req.body.emailid:olddata.emailid,
        city:req.body.city?req.body.city:olddata.city,
        phone:req.body.phone?req.body.phone:olddata.phone,
        state:req.body.state?req.body.state:olddata.state,
        zip:req.body.zip?req.body.zip:olddata.zip,
        dob:req.body.dob?req.body.dob:olddata.dob,
        gender:req.body.gender?req.body.gender:olddata.gender,

    }
const updation=await registerSchema.updateOne({_id:req.params.id},{$set:update})
if(updation){
    res.status(200).json({
        success:true,
        error:false,
        message:'update successfully'
    })
}
else{
    res.status(400).json({
        success:false,
        error:true,
        message:'error to updation'

    })
}
})

registerRoutes.get('/delete/:id',async(req,res)=>{
    const deleted=await registerSchema.deleteOne({_id:req.params.id})
    if(deleted.deletedCount==1){
        res.status(200).json({
            success:true,
            error:false,
            message:'deleted successfully'
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'error to delete'
        })
    }
})

module.exports=registerRoutes;