import usersModel from "../models/users";

const userController = {
  getUsers: (req, res, next) => {
    const users = usersModel.getUsers()
    res.send(users);
  }
}

export default userController
