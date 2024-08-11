import { pagination, pagMapToModel } from "../utils/pagination";
import Product from "../models/product";
import { ErrorResponse } from "../utils/Errors";
import { IPaginationResponse } from "../interfaces";

export const getProducts = async (page: string, pagesize: string): Promise<IPaginationResponse> => {
  try {
    const { rows, count } = await Product.findAndCountAll({
      ...(page && pagesize ? pagMapToModel(page, pagesize) : {}),
    });

    return pagination(count, page, pagesize, rows);
  } catch (error) {
    console.error("getProducts Error");
    throw new ErrorResponse({
      status: 500,
      message: "Internal Server Error",
      data: error,
    });
  }
};
