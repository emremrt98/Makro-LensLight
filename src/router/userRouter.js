import express from "express";
import * as UserController from '../controller/userController.js';
const router = express.Router();

router.post('/signup', UserController.createUser);
router.post('/signin', UserController.findUser);
export default router;