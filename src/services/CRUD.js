import connection from "../config/database.js";

export const getListUser = async () => {
  const [result] = await connection.execute("select * from Users u");
  return result;
};
export const createUser = async (req, res) => {
  const { email, username, city } = req.body;
  try {
    const [results] = await connection.execute(
      `INSERT INTO Users (email, name, city)
       VALUES (?, ?, ?)`,
      [email, username, city]
    );
    res.send("create user successfully ");
  } catch (err) {
    console.log(err);
  }
};
export const getUserById = async (id) => {
  const [result] = await connection.execute(
    "select * from Users where id = ?",
    [id]
  );
  return result;
};
export const updateUserById = async (req, res) => {
  const { username, email, city } = req.body;
  const { id } = req.params;

  const [result] = await connection.execute(
    `UPDATE Users
    SET name = ?, email = ?, city = ?
    WHERE id = ?;`,
    [username, email, city, id]
  );

  res.send("update user successfully ");
};
export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  await connection.execute(`DELETE FROM Users WHERE id=?;`, [id]);
  res.send("delete user successfully ");
};
