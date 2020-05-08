const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const gradeSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  curriculumId: String,
  name: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const Grade = Model('Grade', gradeSchema);

module.exports = { Grade : Grade };
