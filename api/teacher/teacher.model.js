const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const teacherSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: String,
  image: {name: String, url: String },
  about: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now } 
});

// model
const Teacher = Model('Teacher', teacherSchema);

module.exports = { Teacher : Teacher };
