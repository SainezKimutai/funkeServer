const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const clientBlogSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: { type: Schema.Types.ObjectId },
  title: String,
  body: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now } 
});

// model
const ClientBlog = Model('ClientBlog', clientBlogSchema);

module.exports = { ClientBlog : ClientBlog };
