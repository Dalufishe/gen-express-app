import usersModel from "../models/users.js";

const userController = {
  getUsers: (req, res, next) => {
    const users = usersModel.getUsers()
    res.send(users);
  }
}

export default userController