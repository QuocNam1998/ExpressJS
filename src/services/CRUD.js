import connection from "../config/database.js";
import User from "../models/User.js";

export const getListUser = async () => {
  const rep = await User.find({}).exec();
  return rep;
};
export const createUser = async (req, res) => {
  const { email, username, city } = req.body;
  try {
    const user = new User({
      username: username,
      email: email,
      city: city,
    });
    user.save();
    res.send("create user successfully ");
  } catch (err) {
    console.log("An error occured: ", err);
  }
};
export const getUserById = async (id) => {
  const userRep = await User.findById(id).exec();
  return userRep;
};
export const updateUserById = async (req, res) => {
  const { username, email, city } = req.body;
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { username, email, city });
  res.redirect("/");
};
export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  await User.deleteOne({ _id: id });
  res.redirect("/");
};
