import { pagination, pagMapToModel } from "../utils/pagination";
import Client from "../models/clients";
import { ErrorResponse } from "../utils/Errors";
import { IPaginationResponse } from "../interfaces";

export const getClients = async (page: string, pagesize: string): Promise<IPaginationResponse> => {
  try {
    const { rows, count } = await Client.findAndCountAll({
      ...(page && pagesize ? pagMapToModel(page, pagesize) : {}),
    });

    return pagination(count, page, pagesize, rows);
  } catch (error) {
    console.error("getClients Error");
    throw new ErrorResponse({
      status: 500,
      message: "Internal Server Error",
      data: error,
    });
  }
};
