import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controller/authentication-controller";

const authenticationRoute = express.Router();

authenticationRoute.post("/", createUser);
authenticationRoute.get("/", getUsers);
authenticationRoute.put("/:userId", updateUser);
authenticationRoute.delete("/:userId", deleteUser);

export default authenticationRoute;
