var express=require('express')
var mongoose=require('mongoose')
const shopSchema = require('../models/shopSchema')
const loginSchema = require('../models/loginSchema')

var shopRoutes=express.Router()



shopRoutes.post('/shopregister',async(req,res)=>{
    const login={
        email:req.body.email,
        password:req.body.password,
        role:'shop',
    }
    const checkemail=await loginSchema.findOne({email:req.body.email})
    if(checkemail){
       return res.status(400).json({
            success:false,
            error:true,
            message:'already existing email id'
        })
    }

    const checkpardsname=await shopSchema.findOne({pardsname:req.body.pardsname})
    if(checkpardsname){
      return  res.status(400).json({
          success:false,
          error:true,
            message:'already existing pardsname'
        })
    }

    const log=await loginSchema(login).save()
    const shopreg={
        loginId:log._id,
        pardsname:req.body.pardsname,
        code:req.body.code,
        price:req.body.price,
    }
    const saved=await shopSchema(shopreg).save()
    if(saved&&log){
        res.status(201).json({
            success:true,
            error:false,
            message:'successfully added'
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
shopRoutes.get('/viewshop',async(req,res)=>{
    const view=await shopSchema.aggregate([
            {
              '$lookup': {
                'from': 'logs', 
                'localField': 'loginId', 
                'foreignField': '_id', 
                'as': 'shop'
              }
            }
          ])
          
    if(view){
        res.status(200).json({
            success:true,
            error:false,
            message:'view successfully',
            data:view,
        })
    }
    else{
        res.status(400).json({
            success:true,
            error:false,
            message:'error to view'
        })
    }
})


module.exports=shopRoutes;