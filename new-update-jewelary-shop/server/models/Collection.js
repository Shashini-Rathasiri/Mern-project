const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectionName: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Collection", CollectionSchema);
