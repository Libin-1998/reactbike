var express=require('express')
var mongoose=require('mongoose')
const pardsSchema = require('../models/pardsSchema')
var pardsRoutes=express.Router()

pardsRoutes.post('/add-product',async(req,res)=>{
    const reg={
        pardsname:req.body.pardsname,
        pardscode:req.body.pardscode,
        price:req.body.price,
        company:req.body.company,

    }
    const saved=await pardsSchema(reg).save()

    if(saved){
        res.status(201).json({
            success:true,
            error:false,
            data:saved,
            message:'added successfully'
        })
    }
    else{
        res.status(400).json({
            success:true,
            error:false,
            message:'added error'
        })
    }
})
pardsRoutes.get('/viewdata',async(req,res)=>{
    const views=await pardsSchema.find()
    if(views){
        res.status(200).json({
            success:true,
            error:false,
            data:views,
            message:'view successfully'
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'view error'
        })
    }
})

pardsRoutes.post('/update/:id',async(req,res)=>{
    const olddata=await pardsSchema.findOne({_id:req.params.id})
    const edit={
        pardsname:req.body.pardsname?req.body.pardsname:olddata.pardsname,
        pardscode:req.body.pardscode?req.body.pardscode:olddata.pardscode,
        price:req.body.price?req.body.price:olddata.price,
        company:req.body.company?req.body.company:olddata.company,
    }
    const update=await pardsSchema.updateOne({_id:req.params.id},{$set:edit})
    const datas=await pardsSchema.findOne({_id:req.params.id})

    if(update){
        res.status(200).json({
            success:true,
            error:false,
            updatestatus:update,
            data:datas,
            message:'data updated'
        })
    }
    else{
        res.status(400).json({
            success:true,
            error:false,
            message:'not updated'
        })
    }
})

pardsRoutes.get('/delete/:id',async(req,res)=>{
    const deleted=await pardsSchema.deleteOne({_id:req.params.id})
    const datas=await pardsSchema.find()
    if(deleted){
        res.status(200).json({
            success:true,
            error:false,
            data:datas,
            message:'successfully deleted'
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

pardsRoutes.get('/viewdata/:id',async(req,res)=>{
    const data=await pardsSchema.findOne({_id:req.params.id})
    if(data){
        res.status(200).json({
            success:true,
            error:false,
            data:data,
            message:'findone successfully'
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'error to find'
        })
    }
})
    
pardsRoutes.get('/viewdatas/company',async(req,res)=>{
    const companyviews=await pardsSchema.find({company:"IFB"})
    if(companyviews){
        res.status(200).json({
            success:true,
            error:false,
            data:companyviews,
            message:'IFB company view successfully'
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'error to find'
        })
    }
})



module.exports=pardsRoutes
