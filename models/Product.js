import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  files: [{ type: String }], // Store multiple image/video URLs
  stock: { type: Number, default: 0 },
  category: { type: [String], required: true },
  related_products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // Reference to other products
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);
