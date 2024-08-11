import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validateSchema = (schema: Joi.ObjectSchema<any>) => {
  return function (req: Request, res: Response, next: NextFunction) {
    if (schema === null) return next();
    const { body } = req;
    const isValid = schema.validate(body);
    if (isValid?.error) {
      return res.status(400).send({
        status: 400,
        statusMessage: "Bad request",
        message: isValid.error.message,
      });
    }
    next();
  };
};
