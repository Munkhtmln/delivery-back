import express from "express";
import {
  createFood,
  deleteFood,
  getFood,
  updateFoodData,
} from "../controller/food.controller";

const foodRoute = express.Router();

foodRoute.post("/", createFood);
foodRoute.get("/", getFood);
foodRoute.put("/:foodId", updateFoodData);
foodRoute.delete("/:foodId", deleteFood);

export default foodRoute;
