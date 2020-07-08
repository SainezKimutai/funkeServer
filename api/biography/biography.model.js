const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const biographySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  established: Date,
  graduates: Number,
  awards: Number,
  createdAt: { type : Date },
  updatedAt: { type : Date, default: Date.now }
});

// model
const Biography = Model('Biography', biographySchema);

module.exports = { Biography : Biography };
