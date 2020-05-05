const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const clientProfileSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: String,
  gender: String,
  responsibility : {type: String, enum: ['parent', 'guardian']},
  enrolledPupils:  [{
		firstName: String,
		lastName: String,
    dob: Date,
    currentGrade: Number
  }],
  subscribedLessons: [{ lessonId: String }],
  paidKits: [{ kitId: String }],
  createdAt: Date,
  updatedAt: Date
});

// model
const ClientProfile = Model('ClientProfile', clientProfileSchema);

module.exports = { ClientProfile : ClientProfile };
