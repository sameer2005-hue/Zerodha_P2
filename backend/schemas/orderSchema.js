const { Schema } = require("mongoose");
const User = require("../model/userModel");

const orderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // User model ka reference
    required: true,
  },
});

module.exports = { orderSchema };
