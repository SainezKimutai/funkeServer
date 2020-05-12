const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const clientProfileSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: String,
  subscription: {
    curriculums: [{curriculumId: String}],
    grades: [{gradeId: String}],
    courses: [{courseId: String}],
    lessons: [{lessonId: String}]
  },
  paidKits: [{ kitId: String }],
  createdAt: Date,
  updatedAt: Date
});

// model
const ClientProfile = Model('ClientProfile', clientProfileSchema);

module.exports = { ClientProfile : ClientProfile };
