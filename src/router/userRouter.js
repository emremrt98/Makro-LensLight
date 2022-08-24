import express from "express";
import * as UserController from '../controller/userController.js';
const router = express.Router();

router.post('/signin', UserController.createUser);

export default router;