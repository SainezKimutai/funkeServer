const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const adminBlogSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  comment: String,
  image: {name: String, url: String},
  createdAt: Date,
  updatedAt: Date
});

// model
const AdminBlog = Model('AdminBlog', adminBlogSchema);

module.exports = { AdminBlog : AdminBlog };
