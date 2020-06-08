const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const courseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  gradeId: String,
  name: String,
  description: String,
  price: Number,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now } 
});

// model
const Course = Model('Course', courseSchema);

module.exports = { Course : Course };
