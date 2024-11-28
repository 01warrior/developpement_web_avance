import * as orderService from "../services/order_service.js"
export async function getAllOrders(req,res){
     const orders= await orderService.getAllOrders();
     res.json(orders);
}
export async function addOrder(req,res){
    const order=await orderService.addOrder(req.body);
    res.json(order);
}

