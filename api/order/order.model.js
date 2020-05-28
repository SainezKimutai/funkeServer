const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const orderSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  paymentMethod: {type: String, enum: ['m-pesa', 'paypal']},
  userId: { type: Schema.Types.ObjectId},
  purchasedItems: {
    curriculums: [],
    grades: [],
    courses: [],
    lessons: [],
    kits: [],
  },
  kitsDelivered: { type: Schema.Types.Boolean, default: false },
  amountPayed: Number,
  datePurchased: Date,
  payPalFullDetails: [],
  mpesaFullDetails: [],
});

// model
const Order = Model('Order', orderSchema);

module.exports = { Order : Order };
