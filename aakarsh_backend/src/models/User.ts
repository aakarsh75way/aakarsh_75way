import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], required: true },
});

const User = mongoose.models.User || mongoose.model("Users", userSchema);
export default User;