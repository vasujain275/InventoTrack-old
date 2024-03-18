import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: Sting,
    required: true
  },
  description: {
    type: Sting,
    required: true
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller"
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }
  ]
}, { timestamps: true })


export const Product = new mongoose.model("Product", productSchema);
