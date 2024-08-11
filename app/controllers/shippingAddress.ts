import { Request, Response } from "express";
import { ErrorResponse } from "../utils/Errors";
import { getShippingAddresses } from "../services/shippingAddress";
import { IPaginationResponse } from "app/interfaces";

export default class ShippingAddressesController {
  public static async handleGetShippingAddresses(req: Request, res: Response) {
    try {
      const { page, pagesize } = req.query;
      const shippingAddresses: IPaginationResponse = await getShippingAddresses(page as string, pagesize as string);
      res.status(200).send({
        status: 200,
        message: "Shipping Addresses Found",
        data: shippingAddresses,
      });
    } catch (error) {
      if (error instanceof ErrorResponse) return res.status(error?.status).send(error);
      if (error instanceof Error) return res.status(500).send(new ErrorResponse({ status: 500, message: error.message, data: error }));
    }
  }
}
