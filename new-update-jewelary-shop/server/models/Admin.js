const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    adminname: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    mobileNumber: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
