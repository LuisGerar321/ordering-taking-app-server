import { pagination, pagMapToModel } from "../utils/pagination";
import Order from "../models/orders";
import { ErrorResponse } from "../utils/Errors";
import { IAddOrder, IPaginationResponse } from "../interfaces";
import Product from "../models/product";
import Client from "../models/clients";
import ShippingAddress from "../models/shippingAddresses";
import { Op } from "sequelize";
import sequelize from "../db";

export const getOrders = async (page: string, pagesize: string): Promise<IPaginationResponse> => {
  try {
    const { rows, count } = await Order.findAndCountAll({
      include: [
        {
          model: Product,
          as: "products",
          through: {
            attributes: [],
          },
        },
      ],
      distinct: true,
      ...pagMapToModel(page, pagesize),
    });

    return pagination(count, page, pagesize, rows);
  } catch (error) {
    console.error("getOrders Error");
    throw new ErrorResponse({
      status: 500,
      message: "Internal Server Error",
      data: error,
    });
  }
};

export const addOrder = async ({ clientId, shippingAddressId, products }: IAddOrder) => {
  const t = await sequelize.transaction();
  try {
    const client: Client = await Client.findOne({ where: { id: clientId }, transaction: t });
    if (!client)
      throw new ErrorResponse({
        status: 404,
        message: "Order can not be created, client do not exist on db",
      });

    const shippingAddress: ShippingAddress = await ShippingAddress.findOne({ where: { id: shippingAddressId }, transaction: t });
    if (!shippingAddress)
      throw new ErrorResponse({
        status: 404,
        message: "Order can not be created, ShippingAddress do not exist on db",
      });

    const isShippingAddressOwnByClient = shippingAddress.clientId === clientId;
    if (!isShippingAddressOwnByClient) {
      throw new ErrorResponse({
        status: 400,
        message: "Order cannot be created, ShippingAddress does not belong to the client",
      });
    }

    const newOrder = await Order.create({
      clientId,
      shippingAddressId,
    });

    if (products && products.length > 0) {
      const validProducts = await Product.findAll({ where: { id: { [Op.in]: products } }, transaction: t });
      if (validProducts.length !== products.length) {
        throw new ErrorResponse({
          status: 404,
          message: "One or more products do not exist in the database",
        });
      }

      await newOrder.$set(
        "products",
        validProducts.map((p) => p.id),
      );
    }

    await t.commit();
    return newOrder;
  } catch (error) {
    await t.rollback();
    console.log(error);
    throw error;
  }
};
