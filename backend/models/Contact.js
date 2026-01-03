const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    Message: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
