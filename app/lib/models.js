import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const pendataanSchema = new mongoose.Schema(
  {
    casedata: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      enum: ["bantuan", "layanan", "kasus"],
      required: true,
    },
    reporter: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      enum: ["done", "pending", "cancelled"],
      default: "pending",
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Pendataan = mongoose.models.Pendataan || mongoose.model("Pendataan", pendataanSchema);
