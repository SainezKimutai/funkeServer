const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const gradeSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  curriculumId: String,
  name: String,
  price: Number,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now } 
});

// model
const Grade = Model('Grade', gradeSchema);

module.exports = { Grade : Grade };
