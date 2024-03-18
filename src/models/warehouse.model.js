import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin"
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  ],
  totalCapacity: {
    type: Number,
    required: true
  },
  freeCapacity: {
    type: Number,
    required: true
  }
}, { timestamps: true })


export const Warehouse = new mongoose.model("Warehouse", warehouseSchema);
