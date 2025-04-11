import mongoose from "mongoose";

const userSchrema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchrema);

export default userModel;
