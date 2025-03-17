const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart'
  }
}, { timestamps: true });

// ✅ Fix OverwriteModelError
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
