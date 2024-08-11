import { Request, Response } from "express";
import { ErrorResponse } from "../utils/Errors";
import { getClients } from "../services/clients";
import { IPaginationResponse, IResponse } from "app/interfaces";

export default class ClientsController {
  public static async handleGetClients(req: Request, res: Response) {
    try {
      const { page, pagesize } = req.query;
      const clients: IPaginationResponse = await getClients(page as string, pagesize as string);
      res.status(200).send({
        status: 200,
        message: "Clients Found",
        data: clients,
      });
    } catch (error) {
      if (error instanceof ErrorResponse) return res.status(error?.status).send(error);
      if (error instanceof Error) return res.status(500).send(new ErrorResponse({ status: 500, message: error.message, data: error }));
    }
  }
}
