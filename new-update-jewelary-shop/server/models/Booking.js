const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    username: { type: String },
    shopId: { type: String },
    userId: { type: String },
    shopName: { type: String },
    location: { type: String },
    mobileNumber: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
