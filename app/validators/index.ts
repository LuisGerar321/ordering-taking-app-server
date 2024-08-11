import Joi from "joi";

export const addOrderSchema = Joi.object({
  clientId: Joi.number().integer().required(),
  shippingAddressId: Joi.number().integer().required(),
  products: Joi.array().items(Joi.number().integer()).optional(),
});
