import User from "../models/User.js";
const postCreateUser = async (req, res) => {
  const { email, username, city } = req.body;
  try {
    const user = new User({
      username: username,
      email: email,
      city: city,
    });
    user.save();
    res.send(user);
  } catch (err) {
    console.log("An error occured: ", err);
  }
};
export { postCreateUser };
