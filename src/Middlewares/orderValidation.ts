import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const orderListSchema = Joi.object({
  id_menu: Joi.number().required(),
  jumlah: Joi.number().min(1).required(),
  catatan: Joi.string().allow("", null).optional(),
});

const addDataSchema = Joi.object({
  id_stan: Joi.number().required(),
  items: Joi.array().items(orderListSchema).min(1).required(),
});

const updateStatusSchema = Joi.object({
  status: Joi.string()
    .valid("BELUM", "DIMASAK", "SELESAI")
    .uppercase()
    .required(),
});

export const verifyCreateOrder = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = addDataSchema.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    return response.status(400).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
  }
  return next();
};

export const verifyUpdateStatus = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = updateStatusSchema.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    return response.status(400).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
  }
  return next();
};
