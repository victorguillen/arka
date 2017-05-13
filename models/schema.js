import mongoose from 'mongoose';
let Schema = mongoose.Schema;

// Order Schema
const OrderSchema = new Schema({
  userId: {
    type: String,
    required: [true, 'ID field is required']
  },
  description: {
    type: String,
    required: [false]
  },
  st1: {
    type: String,
    required: [false]
  },
  st2: {
    type: String,
    required: [false]
  },
  city: {
    type: String,
    required: [false]
  },
  state: {
    type: String,
    required: [false]
  },
  zip: {
    type: String,
    required: [false]
  },
  country: {
    type: String,
    required: [false]
  },
  quantity: {
    type: Number,
    required: [true]
  },
  unitPrice: {
    type: Number,
    required: [false]
  },
  subTotal: {
    type: Number,
    required: [false]
  },
  shippingService: {
    type: String,
    required: [false]
  },
  shippingPrice: {
    type: Number,
    required: [false]
  },
  total: {
    type: Number,
    required: [false]
  },
  tax: {
    type: Number,
    required: [false]
  },
  status: {
    type: String,
    required: [false]
  },
  mfgName: {
    type: String,
    required: [false]
  }
});

export const Order = mongoose.model('order', OrderSchema);

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  password: String,
  admin: Boolean
});

export const User = mongoose.model('user', UserSchema);
