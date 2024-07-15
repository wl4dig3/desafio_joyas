import express from "express";
import {controllers } from "../controllers/controllers.js";

const router = express.Router();

router.get("/", controllers.home);
router.get("/joyas_with_limits", controllers.getJoyasLimit );
router.get("/joyas", controllers.getJoyas );
router.get("/joyas_filtered", controllers.getjoyasFilteredController );


export default router;