import { NextFunction, Request, Response } from "express";
import usersModel from "../models/users";

const userController = {
  getUsers: (req: Request, res: Response, next: NextFunction) => {
    const users = usersModel.getUsers();
    res.send(users);
  },
};

export default userController;
