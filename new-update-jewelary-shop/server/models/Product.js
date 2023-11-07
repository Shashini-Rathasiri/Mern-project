const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: [String] },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    categories: { type: [String] },
    collections: { type: [String] },
    shopId: { type: String },
    availability: { type: String },
    title: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
