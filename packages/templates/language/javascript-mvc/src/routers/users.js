import express from 'express';
const router = express.Router();

import userController from "../controllers/users";

router.get('/', userController.getUsers);

export default router;
