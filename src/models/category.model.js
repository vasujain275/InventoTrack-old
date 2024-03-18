import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ]
}, { timestamps: true })


export default Category = new mongoose.model("Category", categorySchema);
