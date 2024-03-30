import path from "path";

const configViewEngine = (express, app) => {
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  app.use(express.static("public"));
};
export default configViewEngine;
