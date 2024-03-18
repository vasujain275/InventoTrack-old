import mongoose from "mongoose";

const orderStatusEnum = {
  values: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
  message: "{VALUE} is not a valid order status",
};

const orderSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    destination: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: orderStatusEnum,
      default: "Pending",
    },
    warehouse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warehouse",
    },
  },
  { timestamps: true }
);

export const Order = new mongoose.model("Order", orderSchema);
