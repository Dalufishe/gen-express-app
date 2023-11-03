import express from 'express';
const router = express.Router();

import userController from "../controllers/users.js";

router.get('/', userController.getUsers);

export default router;
