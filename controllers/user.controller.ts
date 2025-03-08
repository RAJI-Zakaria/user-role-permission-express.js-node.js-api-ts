import { Request, Response } from "express";
import userService from "../services/user.service";

// get all users
const getAllUsers = async (req: Request, res: Response) => {
  console.log("getAllUsers");
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllUsers };
