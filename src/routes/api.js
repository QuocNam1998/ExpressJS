import express from "express";
import { getListUser } from "../services/CRUD.js";
import { postCreateUser } from "../controllers/apiController.js";
const routerAPI = express.Router();
const webApi = () => {
  routerAPI.get("/v1/api/users", async (req, res) => {
    const listUser = await getListUser();
    res.status(200).json({
      errorCode: 0,
      data: listUser,
    });
  });
  routerAPI.post("/v1/api/users", postCreateUser);

  return routerAPI;
};
export default webApi;
