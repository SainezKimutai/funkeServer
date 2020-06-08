const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const lessonSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  courseId: String,
  teacherName: String,
	topic: String,
  body: String,
  price: Number,
  attachment: {
    videoName: String, videoUrl: String,
    imageName: String, imageUrl: String,
    kitName: String, kitUrl: String, kitId: String
    },
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const Lesson = Model('Lesson', lessonSchema);

module.exports = { Lesson : Lesson };
