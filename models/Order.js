import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
