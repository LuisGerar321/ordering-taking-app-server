import { Router } from "express";
import OrdersController from "../controllers/orders";
import { validateSchema } from "../middlewares";
import { addOrderSchema } from "../validators";

const Orders = Router();

Orders.get("/", OrdersController.handleGetOrders);
Orders.post("/", validateSchema(addOrderSchema), OrdersController.handleCreateOrder);

export default Orders;
