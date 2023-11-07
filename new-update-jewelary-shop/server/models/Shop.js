const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema(
  {
    shopName: { type: String, required: true },
    img: { type: String, required: true },
    location: { type: String, required: true },
    userId: { type: String },
    userIds: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", ShopSchema);
