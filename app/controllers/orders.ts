import { Request, Response } from "express";
import { ErrorResponse } from "../utils/Errors";
import { addOrder, getOrders } from "../services/orders";
import { IAddOrder, IPaginationResponse, IResponse } from "../interfaces";

export default class OrdersController {
  public static async handleGetOrders(req: Request, res: Response) {
    try {
      const { page, pagesize } = req.query;
      const Orders: IPaginationResponse = await getOrders(page as string, pagesize as string);
      res.status(200).send({
        status: 200,
        message: "Orders Found",
        data: Orders,
      });
    } catch (error) {
      if (error instanceof ErrorResponse) return res.status(error?.status).send(error);
      if (error instanceof Error) return res.status(500).send(new ErrorResponse({ status: 500, message: error.message, data: error }));
    }
  }

  public static async handleCreateOrder(req: Request, res: Response) {
    try {
      const orderData: IAddOrder = req.body;
      const newOrder = await addOrder(orderData);

      res.status(201).send({
        status: 201,
        message: "Order Created Successfully",
        data: newOrder,
      });
    } catch (error) {
      if (error instanceof ErrorResponse) {
        return res.status(error?.status).send(error);
      }
      if (error instanceof Error) {
        return res.status(500).send(
          new ErrorResponse({
            status: 500,
            message: error.message,
            data: error,
          }),
        );
      }
      res.status(500).send(
        new ErrorResponse({
          status: 500,
          message: "Internal Server Error",
          data: error,
        }),
      );
    }
  }
}
