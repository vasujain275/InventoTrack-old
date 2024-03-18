import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
    password: {
      type: String,
      required: true
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

adminSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
})

adminSchema.method.isPasswordCorrect = async function(password) {
  return await bcrypt.compare(password, this.password)
}


export const Admin = new mongoose.model("Admin", adminSchema);
