import express from "express";
import "dotenv/config";
import configViewEngine from "./config/templateEngine.js";

const app = express();
const port = process.env.PORT || 8080;
import webRouter from "./routes/web.js";
import connection from "./config/database.js";
import webApi from "./routes/api.js";

// configure view engine
configViewEngine(express, app);
// parsing data form
app.use(
  express.urlencoded({
    extended: true,
  })
);
// connect to server
connection();
//
// app.use(webRouter());
app.use(webApi());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
