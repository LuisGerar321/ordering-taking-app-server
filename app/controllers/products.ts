import { Request, Response } from "express";
import { ErrorResponse } from "../utils/Errors";
import { getProducts } from "../services/products";
import { IPaginationResponse } from "app/interfaces";

export default class ProductsController {
  public static async handleGetProducts(req: Request, res: Response) {
    try {
      const { page, pagesize } = req.query;
      const products: IPaginationResponse = await getProducts(page as string, pagesize as string);
      res.status(200).send({
        status: 200,
        message: "Products Found",
        data: products,
      });
    } catch (error) {
      if (error instanceof ErrorResponse) return res.status(error?.status).send(error);
      if (error instanceof Error) return res.status(500).send(new ErrorResponse({ status: 500, message: error.message, data: error }));
    }
  }
}
