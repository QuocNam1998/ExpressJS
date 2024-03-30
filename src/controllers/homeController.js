import connection from "../config/database.js";
import { getListUser, getUserById } from "../services/CRUD.js";

const homePage = async (req, res) => {
  const listUser = await getListUser();
  res.render("home.ejs", { listUser: listUser });
};
const create = (req, res) => {
  res.render("create.ejs");
};
const edit = async (req, res) => {
  const user = await getUserById(req.params.id);

  let detailUser = user && user.length > 0 ? user[0] : {};
  res.render("edit.ejs", { theUser: detailUser });
};
const getUsers = async (req, res) => {
  try {
    const [results] = await connection.execute("select * from Users");
    res.send(JSON.stringify(results));
  } catch (err) {
    console.log(err);
  }
};
const deleteUserForm = (req, res) => {
  res.render("delete.ejs", { id: req.params.id });
};

export { homePage, getUsers, create, edit, deleteUserForm };
