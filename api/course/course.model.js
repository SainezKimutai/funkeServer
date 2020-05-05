const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const courseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  gradeId: String,
  name: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const Course = Model('Course', courseSchema);

module.exports = { Course : Course };
