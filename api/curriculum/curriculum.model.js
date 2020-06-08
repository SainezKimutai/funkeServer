const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const curriculumSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: String,
  price: Number,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now } 
});

// model
const Curriculum = Model('Curriculum', curriculumSchema);

module.exports = { Curriculum : Curriculum };
