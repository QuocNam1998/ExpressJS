import mongoose from "mongoose";
const userSchema = {
  username: String,
  email: String,
  city: String,
};
const user = mongoose.model("User", userSchema);
export default user;
