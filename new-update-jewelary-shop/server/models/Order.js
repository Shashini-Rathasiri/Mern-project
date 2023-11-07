const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    productId: { type: String },
    productName: { type: String },
    price: { type: Number },
    img: { type: String },
    shopId: { type: String },
    userId: { type: String },
    username: { type: String },
    mobileNumber: { type: String },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
