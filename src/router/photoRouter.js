import express from "express";
import * as PhotoController from '../controller/photoController.js';
const router = express.Router();

router.post('/', PhotoController.createPhoto);
router.get('/', PhotoController.getAllPhotos);


export default router;