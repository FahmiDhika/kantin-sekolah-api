import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const addMenuSchema = Joi.object({
  nama_menu: Joi.string().required(),
  harga: Joi.number().min(0).required(),
  jenis: Joi.string().valid("MAKANAN", "MINUMAN").required(),
  foto: Joi.allow().optional(),
  deskripsi: Joi.string().required(),
});

export const updateMenuSchema = Joi.object({
  nama_menu: Joi.string().optional(),
  harga: Joi.number().min(0).optional(),
  jenis: Joi.string().valid("MAKANAN", "MINUMAN").optional(),
  foto: Joi.allow().optional(),
  deskripsi: Joi.string().optional(),
});

export const verifyAddMenu = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = addMenuSchema.validate(request.body, {
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

export const verifyUpdateMenu = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = updateMenuSchema.validate(request.body, {
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
