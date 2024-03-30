import mysql from "mysql2/promise";
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: "root",
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  connectionLimit: 10,
  queueLimit: 0,
});
export default connection;
