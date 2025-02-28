import { Request, Response } from "express";
import foodCategoryModels from "../models/food-category.models";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModels.create(categoryData);
    res
      .status(201)
      .json({ message: "succesfuly created food-category", data: newCategory });
  } catch (error) {
    res.status(500).json({ message: "erroring create food category", error });
  }
};

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const getCategory = await foodCategoryModels.find();
    res.status(201).json({
      message: "succesfuly got food-category",
      data: getCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "getting error", error });
  }
};

export const uptadeDelete = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  const uptadeData = req.body;
  try {
    const updateCategory = await foodCategoryModels.updateOne(
      {
        _id: foodCategoryId,
      },
      uptadeData
    );
    res.status(201).json({
      message: "succesfuly updated food-category",
      data: updateCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "deleting error", error });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;

  try {
    const deleteCategory = await foodCategoryModels.deleteOne({
      _id: foodCategoryId,
    });
    res.status(201).json({
      message: "succesfuly updated food-category",
      data: deleteCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "deleting error", error });
  }
};
