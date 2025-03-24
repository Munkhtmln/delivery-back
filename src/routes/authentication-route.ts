import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controller/authentication-controller";
import { forgetPassword } from "../controller/forget-password.controller";

const authenticationRoute = express.Router();

authenticationRoute.post("/", createUser);
authenticationRoute.get("/", getUsers);
authenticationRoute.put("/:userId", updateUser);
authenticationRoute.delete("/:userId", deleteUser);
authenticationRoute.post("/reset-password", forgetPassword);

export default authenticationRoute;
