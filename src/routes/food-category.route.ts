import express from "express";
import {
  createFoodCategory,
  deleteCategory,
  getFoodCategory,
  uptadeDelete,
} from "../controller/food-category.controller";

const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategory);
categoryRoute.put("/:foodCategoryId", uptadeDelete);
categoryRoute.delete("/:foodCategoryId", deleteCategory);

export default categoryRoute;
