var express=require('express')
var mongoose=require('mongoose')
const  multer=require('multer')

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../client/public/img/')},
        filename:function(req,file,cb){
            cb(null,file.originalname)}
})

const upload=multer({storage})


const volunteerSchema = require('../models/volunteerSchema')

var volunteerRoutes=express.Router()

volunteerRoutes.post('/add_volunteers',upload.single('image'),async(req,res)=>{
    const add={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phone:req.body.phone,
        dob:req.body.dob,
        state:req.body.state,
        city:req.body.city,
        gender:req.body.gender,
        age:req.body.age,
        image:req.file.filename,
        
    }
    const save=await volunteerSchema(add).save()
    if(save){
        res.status(201).json({
            success:true,
            error:false,
            message:'save successfully',
            data:save,
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

volunteerRoutes.get('/view_volunteers',async(req,res)=>{
    const data=await volunteerSchema.find()
    if(data){
        res.status(200).json({
            success:true,
            error:false,
            message:'view successfully',
            data:data,
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'not view'
        })
    }
})

volunteerRoutes.get('/view_volunteers/:id',async(req,res)=>{
    const data=await volunteerSchema.findOne({_id:req.params.id})
    if(data){
        res.status(200).json({
            success:true,
            error:false,
            message:'view successfully',
            data:data,
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'not view'
        })
    }
})


volunteerRoutes.delete('/delete/:id',async(req,res)=>{
    const deleted=await volunteerSchema.deleteOne({_id:req.params.id})
    if(deleted){
        res.status(200).json({
            success:true,
            error:false,
            message:'delete successfully'
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'not deleted'
        })
    }
})

volunteerRoutes.put('/update/:id',upload.single('image'),async(req,res)=>{
    const olddata=await volunteerSchema.findOne({_id:req.params.id})
    const editing={
        firstname:req.body.firstname?req.body.firstname:olddata.firstname,
        lastname:req.body.lastname?req.body.lastname:olddata.lastname,
        phone:req.body.phone?req.body.phone:olddata.phone,
        dob:req.body.dob?req.body.dob:olddata.dob,
        state:req.body.state?req.body.state:olddata.state,
        city:req.body.city?req.body.city:olddata.city,
        gender:req.body.gender?req.body.gender:olddata.gender,
        age:req.body.age?req.body.age:olddata.age,
        image:req.file?req.file.filename:olddata.image,
    }
    const updates=await volunteerSchema.updateOne({_id:req.params.id},{$set:editing})
    if(updates){
        res.status(200).json({
            success:true,
            error:false,
            message:'successfully update',
            updatestatus:updates,
            data:editing,
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'error to update'
        })
    }
})


module.exports=volunteerRoutes