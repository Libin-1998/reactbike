var express=require('express')
var mongoose=require('mongoose')
const loginSchema = require('../models/loginSchema')
var loginRoutes=express.Router()

loginRoutes.post('/login',async(req,res)=>{
    const checkemail=await loginSchema.findOne({email:req.body.email})
    const checkpassword=await loginSchema.findOne({password:req.body.password})
    if(!checkemail&&!checkpassword){
       return res.status(400).json({
            success:false,
            error:true,
            message:'email&password incorrect'
        })
    }

    if(!checkemail){
    console.log(req.body.email);
      return  res.status(400).json({
            success:false,
            error:true,
            message:'incorrect email'
        })
    }

    if(req.body.password==checkemail.password){
        res.status(200).json({
            success:true,
            error:false,
            message:'login success',
            data:checkemail,
        })
        console.log(checkemail);

    }
    else{
        res.status(400).json({
            success:true,
            error:false,
            message:'incorrect password'
        })
    }
})

loginRoutes.get('/delete/:id',async(req,res)=>{
    const deleted=await loginSchema.deleteOne({_id:req.params.id})
    if(deleted){
        res.status(200).json({
            success:true,
            error:false,
            message:'data deleted'
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'data not deleted'
        })
    }
})

module.exports=loginRoutes