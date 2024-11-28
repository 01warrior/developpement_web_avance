import { addCustumer,login } from "../controllers/custumer_controller.js";
import express from "express";
const router=express.Router();

router.route("/").post(addCustumer);
router.route("/login").post(login);

export default router
