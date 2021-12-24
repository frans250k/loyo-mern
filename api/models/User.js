const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, requiered: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    img: { type: String },
    userTitle: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
