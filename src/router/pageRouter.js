import express from "express";
import * as PageController from '../controller/pageController.js';

const router = express.Router();

router.get('/', PageController.getHomePage);

router.get('/about', PageController.getAboutPage);

router.get('/blog', PageController.getBlogPage);

router.get('/contact', PageController.getContactPage);

router.get('/projects', PageController.getProjectsPage);

router.get('/services', PageController.getServicesPage);

router.get('/register', PageController.getRegisterPage);

router.get('/login', PageController.getLoginPage);

export default router;