import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      reqired: false,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    avatar: {
      type: String,
      require: false,
    },
  },
  { timeseries: true }
);

export const Admin = new mongoose.model("Admin", adminSchema);
