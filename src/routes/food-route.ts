import express from "express";
import {
  createFood,
  deleteFood,
  getFood,
  getFoods,
  updateFoodData,
} from "../controller/food-controller";

const foodRoute = express.Router();

foodRoute.post("/", createFood);
foodRoute.get("/:foodId", getFood);
foodRoute.get("/", getFoods);
foodRoute.put("/:foodId", updateFoodData);
foodRoute.delete("/:foodId", deleteFood);

export default foodRoute;
