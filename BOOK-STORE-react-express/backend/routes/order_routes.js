import express from "express";
const router=express.Router();
import {addOrder,getAllOrders} from "../controllers/order_controller.js"
router.route("/").get(getAllOrders)
                 .post(addOrder)

export default router;