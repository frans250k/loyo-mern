const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, requiered: true, unique: true },
    desc: { type: String, requiered: true },
    img: { type: String, requiered: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, requiered: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
