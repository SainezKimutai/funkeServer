const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const curriculumSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const Curriculum = Model('Curriculum', curriculumSchema);

module.exports = { Curriculum : Curriculum };
