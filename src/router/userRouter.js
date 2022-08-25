import express from "express";
import * as UserController from '../controller/userController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/signup', UserController.createUser);
router.post('/signin', UserController.findUser);
router.get('/dashboard', authMiddleware.authenticateToken, UserController.getDashboardPage);
export default router;