import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  brand: { type: String, default: "Samsung" },
  model: { type: String },
  imageURL: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true }, 
  color: { type: String },
  storage: { type: String }, 
  discount: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false }
}, {
  timestamps: true
});

export default mongoose.model("Product", productSchema);
