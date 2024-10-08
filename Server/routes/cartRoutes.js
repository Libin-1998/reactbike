var express = require("express");
var mongoose = require("mongoose");
const cartSchema = require("../models/cartSchema");
var cartRoutes = express.Router();

cartRoutes.post("/add-cart/:loginId/:productId", async (req, res) => {
  const add = {
    loginId: req.params.loginId,
    productId: req.params.productId,
    quantity: req.body.quantity,
  };

  const saves = await cartSchema(add).save();
  if (saves) {
    res.status(201).json({
      success: true,
      error: false,
      message: "successfully added",
      data: saves,
    });
  } else {
    res.status(400).json({
      success: false,
      error: true,
      message: "failed to add",
    });
  }
});

// cartRoutes.get('/view-cart',async(req,res)=>{
//     const view=await cartSchema.aggregate([
//         {
//           '$lookup': {
//             'from': 'pards',
//             'localField': 'productId',
//             'foreignField': '_id',
//             'as': 'parts'
//           }
//         }, {
//           '$lookup': {
//             'from': 'logs',
//             'localField': 'loginId',
//             'foreignField': '_id',
//             'as': 'login'
//           }
//         }
//       ])
//     if(view){
//         res.status(200).json({
//             success:true,
//             error:false,
//             message:'view cart successfully',
//             data:view,
//         })
//     }
//     else{
//         res.status(400).json({
//             success:true,
//             error:false,
//             message:'not view'
//         })
//     }
// })

cartRoutes.get("/view-carts/:loginId", async (req, res) => {
  const views = await cartSchema
    .find({ loginId: req.params.loginId })
    .populate("productId")
    .populate("loginId");
  if (views) {
    res.status(200).json({
      success: true,
      error: false,
      message: "view success",
      data: views,
    });
  } else {
    res.status(400).json({
      success: false,
      error: true,
      message: "error to view",
    });
  }
});

cartRoutes.get("/increment/:id", async (req, res) => {
    try {
        const edit = await cartSchema.findOne({ _id: req.params.id });
        console.log(edit);
        const oldquantity = edit.quantity;
        console.log("quantity:", oldquantity);
        const update = await cartSchema.updateOne(
          { _id: req.params.id },
          { $set: { quantity: oldquantity + 1 } }
        );
        console.log(update);
      
        if (update.modifiedCount == 1) {
          return res.status(200).json({
            success: true,
            error: false,
            message: "cart quantity increment",
          });
        } else {
          return res.status(400).json({
            success: false,
            error: true,
            message: "cart quantity not increment",
          });
        }
    } catch (error) {
      return res.status(500).json({
        success:false,
        error:true,
        message:'somthing went wrong'
      })
        
    }
 
});

cartRoutes.get("/decrement/:id", async (req, res) => {
    try {
        const minus = await cartSchema.findOne({ _id: req.params.id });
  console.log(minus);
  const oldquantity = minus.quantity;
  console.log(oldquantity);
  if (oldquantity !== 1) {
    var update = await cartSchema.updateOne(
      { _id: req.params.id },
      { $set: { quantity: oldquantity - 1 } }
    );
    console.log(update);
    if (update.modifiedCount == 1) {
        res.status(200).json({
          success: true,
          error: false,
          message: "cart quantity decrement",
        });
      } else {
        res.status(200).json({
          succcess: true,
          error: false,
          message: "cart quantity cannot be decremented below one",
        });
      }
  } else {
    const deleted = await cartSchema.deleteOne({ _id: req.params.id });
    console.log(deleted);
  }

    } catch (error) {
    }
  
  
});

cartRoutes.delete("/delete/:id", async (req, res) => {
  const deleted = await cartSchema.deleteOne({ _id: req.params.id });
  if (deleted) {
    res.status(200).json({
      success: true,
      error: false,
      message: "cart data deleted",
    });
  } else {
    res.status(400).json({
      success: false,
      error: true,
      message: "cart data not deleted",
    });
  }
});

cartRoutes.delete("/deletes", async (req, res) => {
  const deleted = await cartSchema.deleteMany();
  if (deleted) {
    res.status(200).json({
      success: true,
      error: false,
      message: "all data deleted",
    });
  } else {
    res.status(400).json({
      success: true,
      error: false,
      message: "data not deleted",
    });
  }
});

module.exports = cartRoutes;
