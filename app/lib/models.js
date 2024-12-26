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
    img: {
      type: String,
    },
    casedata: {
      type: String,
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
      enum: ["Done", "Pending", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Pendataan = mongoose.models.Pendataan || mongoose.model("Pendataan", pendataanSchema);
