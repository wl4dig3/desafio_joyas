import express from "express";
import {controllers } from "../controllers/controllers.js";

const router = express.Router();

router.get("/", controllers.home);
router.get("/joyas_with_limits/:limit", controllers.getJoyasLimit );
router.get("/joyas", controllers.getJoyas );


export default router;