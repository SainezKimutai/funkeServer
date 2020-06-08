const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const clientProfileSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: String,
  subscription: [{
    curriculums: [],
    grades: [],
    courses: [],
    lessons: [],
    subscriptionDate: Date,
  }],
  fevouriteLessons: [],
  paidKits: [{
    orderId: { type: Schema.Types.ObjectId },
    kitsDelivered: { type: Schema.Types.Boolean, default: false },
    kitId: []
  }],
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now } 
});

// model
const ClientProfile = Model('ClientProfile', clientProfileSchema);

module.exports = { ClientProfile : ClientProfile };
