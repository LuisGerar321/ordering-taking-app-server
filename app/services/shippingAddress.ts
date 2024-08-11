import { pagination, pagMapToModel } from "../utils/pagination";
import ShippingAddress from "../models/shippingAddresses";
import { ErrorResponse } from "../utils/Errors";
import { IPaginationResponse } from "../interfaces";

export const getShippingAddresses = async (page: string, pagesize: string): Promise<IPaginationResponse> => {
  try {
    const { rows, count } = await ShippingAddress.findAndCountAll({
      ...(page && pagesize ? pagMapToModel(page, pagesize) : {}),
    });

    return pagination(count, page, pagesize, rows);
  } catch (error) {
    console.error("getShippingAddresses Error");
    throw new ErrorResponse({
      status: 500,
      message: "Internal Server Error",
      data: error,
    });
  }
};
