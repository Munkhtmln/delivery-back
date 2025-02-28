import { Request, Response } from "express";
import foodModels from "../models/food.models";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const newFood = await foodModels.create(foodData);
    res.status(201).json({ message: "succesfuly created food", data: newFood });
  } catch (error) {
    res.status(500).json({ message: "erroring create food ", error });
  }
};
export const getFood = async (req: Request, res: Response) => {
  try {
    const getFood = await foodModels.find();
    res.status(201).json({
      message: "succesfuly got food",
      data: getFood,
    });
  } catch (error) {
    res.status(500).json({ message: "getting error", error });
  }
};

export const updateFoodData = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const uptadeData = req.body;
  try {
    const updateFood = await foodModels.updateOne(
      {
        _id: foodId,
      },
      uptadeData
    );
    res.status(201).json({
      message: "succesfuly updated food",
      data: updateFood,
    });
  } catch (error) {
    res.status(500).json({ message: "updating error", error });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;

  try {
    const deleteFood = await foodModels.deleteOne({
      _id: foodId,
    });
    res.status(201).json({
      message: "succesfuly deleted food",
      data: deleteFood,
    });
  } catch (error) {
    res.status(500).json({ message: "deleting error", error });
  }
};
