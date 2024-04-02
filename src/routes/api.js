import express from "express";
import { getListUser } from "../services/CRUD.js";
const router = express.Router();
const webApi = () => {
  router.get("/v1/api/users", async (req, res) => {
    const listUser = await getListUser();
    res.status(200).json({
      errorCode: 0,
      data: listUser,
    });
  });
  return router;
};
export default webApi;
