var express=require('express')
var mongoose=require('mongoose')
const userSchema = require('../models/userSchema')
const loginSchema = require('../models/loginSchema')

var userRoutes=express.Router()

userRoutes.post('/userregister',async(req,res)=>{
    const login={
        email:req.body.email,
        password:req.body.password,
        role:'user'
    }

    const checkemail=await loginSchema.findOne({email:req.body.email})
    if(checkemail){
       return res.status(400).json({
            success:false,
            error:true,
            message:'already existing email id'
        })
    }
    const checkphone=await userSchema.findOne({phone:req.body.phone})
    if(checkphone){
       return res.status(400).json({
            succes:false,
            error:true,
            message:'already existing phone number'
        })
    }

    const log=await loginSchema(login).save()
    const userreg={
        loginId:log._id,
        name:req.body.name,
        phone:req.body.phone,
        place:req.body.place,
    }
    console.log(userreg);
    const saved=await userSchema(userreg).save()
    if(saved&&log){
        res.status(201).json({
            success:true,
            error:false,
            message:'user data successfully added'
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'failed to add'
        })
    }
})

userRoutes.get('/viewusers',async(req,res)=>{
    const user=await userSchema.aggregate([
            {
              '$lookup': {
                'from': 'logs', 
                'localField': 'loginId', 
                'foreignField': '_id', 
                'as': 'user'
              }
            }

    ])
    if(user){
        res.status(200).json({
            success:true,
            error:false,
            data:user,
            message:'view successfully'
        })
    }
    else{
        res.status(400).json({
            success:true,
            error:false,
            message:'view error'
        })
    }
})

userRoutes.get('/viewusers/:id',async(req,res)=>{
    const view=await userSchema.findOne({_id:req.params.id})
    if(view){
        res.status(200).json({
            success:true,
            error:false,
            message:'finone success',
            data:view,
        })
    }
    else{
        res.status(400).json({
            success:true,
            error:false,
            message:'findone error'
        })
    }
})

userRoutes.post('/update/:id',async(req,res)=>{
    const olddata=await userSchema.findOne({_id:req.params.id})
    const edit={
        name:req.body.name?req.body.name:olddata.name,
        phone:req.body.phone?req.body.phone:olddata.phone,
        place:req.body.place?req.body.place:olddata.place,
    }
    console.log(edit);
    const update=await userSchema.updateOne({_id:req.params.id},{$set:edit})
    const datas=await userSchema.findOne({_id:req.params.id})
    if(update){
        res.status(200).json({
            success:true,
            error:false,
            message:'update successfully',
            data:datas,
            updatestatus:update,
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'not updated'
        })
    }
})

userRoutes.get('/delete/:id',async(req,res)=>{
    const deleted=await userSchema.deleteOne({_id:req.params.id})
    if(deleted){
        res.status(200).json({
            success:true,
            error:false,
            message:'data deleted',
            data:deleted,
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



module.exports=userRoutes;