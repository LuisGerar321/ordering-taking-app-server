import Joi from "joi";

export const productSchema = Joi.object({
  id: Joi.number().integer().required(),
  quantity: Joi.number().integer().required(),
});
export const addOrderSchema = Joi.object({
  clientId: Joi.number().integer().required(),
  shippingAddressId: Joi.number().integer().required(),
  products: Joi.array().items(productSchema).optional(),
});
