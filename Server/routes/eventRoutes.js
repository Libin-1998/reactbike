var express = require("express");
var mongoose = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/img/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const eventSchema = require("../models/eventSchema");

var eventRoutes = express.Router();

eventRoutes.post("/add_details", upload.single("image"), async (req, res) => {
  const add = {
    event_name: req.body.event_name,
    date: req.body.date,
    time: req.body.time,
    fee: req.body.fee,
    place: req.body.place,
    image: req.file.filename,
  };
  const saved = await eventSchema(add).save();
  console.log(saved);

  if (saved) {
    res.status(201).json({
      success: true,
      error: false,
      data: saved,
      message: "saved successfully",
    });
  } else {
    res.status(400).json({
      success: false,
      error: true,
      message: "not saved",
    });
  }
});

eventRoutes.get("/view", async (req, res) => {
  const views = await eventSchema.find();
  if (views) {
    res.status(200).json({
      success: true,
      error: false,
      message: "view successfully",
      data: views,
    });
  } else {
    res.status(400).json({
      success: false,
      error: true,
      message: "view error",
    });
  }
});

eventRoutes.get("/view/:id", async (req, res) => {
  const views = await eventSchema.findOne({ _id: req.params.id });
  if (views) {
    res.status(200).json({
      success: true,
      error: false,
      message: "view successfully",
      data: views,
    });
  } else {
    res.status(400).json({
      success: false,
      error: true,
      message: "view error",
    });
  }
});

eventRoutes.put("/update/:id",upload.single("image"), async (req, res) => {
  const edit = await eventSchema.findOne({ _id: req.params.id });

  const editing = {
    event_name: req.body.event_name ? req.body.event_name : edit.event_name,
    date: req.body.date ? req.body.date : edit.date,
    time: req.body.time ? req.body.time : edit.time,
    fee: req.body.fee ? req.body.fee : edit.fee,
    place: req.body.place ? req.body.place : edit.place,
    image:req.file?req.file.filename:edit.image,
  };
  const update = await eventSchema.updateOne(
    { _id: req.params.id },
    { $set: editing }
  );
  const updated = await eventSchema.findOne({ _id: req.params.id });
  if (update) {
    res.status(200).json({
      success: true,
      error: false,
      message: "update successfully",
      data: updated,
      updatestatus: update,
    });
  } else {
    res.status(400).json({
      success: false,
      error: true,
      message: "updation not success",
    });
  }
});

eventRoutes.delete("/delete/:id", async (req, res) => {
  const deleted = await eventSchema.deleteOne({ _id: req.params.id });
  if (deleted) {
    res.status(200).json({
      success: true,
      error: false,
      message: "deleted successfully",
    });
  } else {
    res.status(400).json({
      success: true,
      error: false,
      message: "not deleted",
    });
  }
});

module.exports = eventRoutes;