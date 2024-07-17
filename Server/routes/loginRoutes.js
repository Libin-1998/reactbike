var express = require("express");
var mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const loginSchema = require("../models/loginSchema");
const registerSchema = require("../models/registerSchema");
var loginRoutes = express.Router();
var jwt=require('jsonwebtoken')

loginRoutes.post("/login", async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;
    if (!name || !password) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "All fields are required",
      });
    }
    const checkname = await registerSchema.findOne({ name: req.body.name });

    if (!checkname) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "name doesn't exist, register first",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(req.body.password,checkname.password);
    if (isPasswordCorrect) {

      const token=jwt.sign({
        userId:checkname._id,
        name:checkname.name,
      },
      "secret_key",
      {
        expiresIn:'1h'
      }
    )
      return res.status(200).json({
        success: true,
        error: false,
        message: "login success",
        data: checkname,
        token:token,
      });
    }
     else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "incorrect password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong",
      errorMessage: error.message,
    });
  }
});

loginRoutes.get("/delete/:id", async (req, res) => {
  const deleted = await loginSchema.deleteOne({ _id: req.params.id });
  if (deleted) {
    res.status(200).json({
      success: true,
      error: false,
      message: "data deleted",
    });
  } else {
    res.status(400).json({
      success: false,
      error: true,
      message: "data not deleted",
    });
  }
});

module.exports = loginRoutes;
