// const express = require("express");
import express from "express";
import {
  homePage,
  getUsers,
  create,
  edit,
  deleteUserForm,
} from "../controllers/homeController.js";
import {
  createUser,
  deleteUserById,
  updateUserById,
} from "../services/CRUD.js";
const router = express.Router();
const webRouter = () => {
  router.get("/", homePage);
  // define the about route
  router.get("/simpleConnections", getUsers);
  router.get("/create", create);
  router.get("/edit/:id", edit);
  router.get("/delete/:id", deleteUserForm);

  router.post("/create-user", createUser);
  router.post("/edit-user/:id", updateUserById);
  router.post("/delete-user/:id", deleteUserById);
  return router;
};

export default webRouter;
