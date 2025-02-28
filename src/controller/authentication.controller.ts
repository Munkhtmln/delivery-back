import { Request, Response } from "express";
import authenticationModels from "../models/authentication.models";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await authenticationModels.create(userData);
    res
      .status(201)
      .json({ message: "succesfuly created new-user", data: newUser });
  } catch (error) {
    res.status(500).json({ message: "erroring create new-user", error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const getUser = await authenticationModels.find();
    res.status(201).json({
      message: "succesfuly got new-user",
      data: getUser,
    });
  } catch (error) {
    res.status(500).json({ message: "getting error", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const userData = req.body;
  try {
    const updateUser = await authenticationModels.updateOne(
      {
        _id: userId,
      },
      userData
    );
    res.status(201).json({
      message: "succesfuly updated user",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({ message: "deleting error", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const deleteUser = await authenticationModels.deleteOne({
      _id: userId,
    });
    res.status(201).json({
      message: "succesfuly deleted user",
      data: deleteUser,
    });
  } catch (error) {
    res.status(500).json({ message: "deleting error", error });
  }
};
