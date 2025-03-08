import { Request, Response, NextFunction } from "express";
import userService from "../services/user.service";
import { IDParams } from "../types";

// get all users
const readUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.readUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// CRUD
const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req: Request<IDParams>, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.updateUser(id, req.body);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req: Request<IDParams>, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.removeUser(req.params.id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { readUsers, createUser, updateUser, deleteUser };
