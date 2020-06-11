const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const kitSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: String,
  image: {name: String, url: String },
  image2: {name: String, url: String },
  image3: {name: String, url: String },
  image4: {name: String, url: String },
	price: Number,
	description: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const Kit = Model('Kit', kitSchema);

module.exports = { Kit : Kit };
