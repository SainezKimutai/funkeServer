const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const adminBlogSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  title: String,
  content: [{
      body: String,
      image: { url: String, name: String}
    }],
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const AdminBlog = Model('AdminBlog', adminBlogSchema);

module.exports = { AdminBlog : AdminBlog };
