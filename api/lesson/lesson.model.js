const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const lessonSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  courseId: String,
  teacherId: String,
	topic: String,
  body: String,
  attachment: {
    videoName: String, videoUrl: String,
    imageName: String, imageUrl: String,
    kitName: String, kitUrl: String, kitId: String
    },
  createdAt: Date,
  updatedAt: Date
});

// model
const Lesson = Model('Lesson', lessonSchema);

module.exports = { Lesson : Lesson };
