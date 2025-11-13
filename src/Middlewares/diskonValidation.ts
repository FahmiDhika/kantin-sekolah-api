import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const createDiskonSchema = Joi.object({
  nama_diskon: Joi.string().required().messages({
    "string.empty": "Nama diskon tidak boleh kosong.",
    "any.required": "Nama diskon wajib diisi.",
  }),
  persentase: Joi.number().min(0).max(100).required().messages({
    "number.base": "Persentase harus berupa angka.",
    "number.min": "Persentase minimal 0.",
    "number.max": "Persentase maksimal 100.",
    "any.required": "Persentase wajib diisi.",
  }),
  tanggal_awal: Joi.date().required().messages({
    "date.base": "Tanggal awal harus berupa tanggal yang valid.",
    "any.required": "Tanggal awal wajib diisi.",
  }),
  tanggal_akhir: Joi.date()
    .required()
    .greater(Joi.ref("tanggal_awal"))
    .messages({
      "date.greater": "Tanggal akhir harus lebih besar dari tanggal awal.",
      "any.required": "Tanggal akhir wajib diisi.",
    }),
});

const updateDiskonSchema = Joi.object({
  nama_diskon: Joi.string().optional(),
  persentase: Joi.number().min(0).max(100).optional(),
  tanggal_awal: Joi.date().optional(),
  tanggal_akhir: Joi.date().optional().greater(Joi.ref("tanggal_awal")),
}).or("nama_diskon", "persentase", "tanggal_awal", "tanggal_akhir");

export const verifyCreateDiskon = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = createDiskonSchema.validate(request.body, {
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

export const verifyUpdateDiskon = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = updateDiskonSchema.validate(request.body, {
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
