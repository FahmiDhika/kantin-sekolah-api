import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(8).alphanum().required(),
  role: Joi.string().valid(`ADMIN_STAN`, `SISWA`).required(),
});

const updateUser = Joi.object({
  username: Joi.string().optional(),
  password: Joi.string().min(8).alphanum().optional(),
  users: Joi.optional(),
});

const dataSiswa = Joi.object({
  nama: Joi.string().required(),
  alamat: Joi.string().required(),
  telepon: Joi.string().required(),
  foto: Joi.allow().optional(),
  users: Joi.optional(),
});

const updateDataSiswa = Joi.object({
  nama: Joi.string().optional(),
  alamat: Joi.string().optional(),
  telepon: Joi.string().optional(),
  foto: Joi.allow().optional(),
  users: Joi.optional(),
});

const dataStan = Joi.object({
  nama_stan: Joi.string().required(),
  nama_pemilik: Joi.string().required(),
  telepon: Joi.string().required(),
  users: Joi.optional(),
});

const updateDataStan = Joi.object({
  nama_stan: Joi.string().optional(),
  nama_pemilik: Joi.string().optional(),
  telepon: Joi.string().optional(),
  users: Joi.optional(),
});

const authSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(8).alphanum().required(),
});

export const verifyAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = authSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(200).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
  }
  return next();
};

export const verifyRegister = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // validasi data dari request body dan mengambil info error jika terdapat error
  const { error } = registerSchema.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    // jika terdapat error, akan memberikan pesan seperti ini
    return response.status(400).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
  }
  return next();
};

export const verifyUpdateUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // validasi data dari request body dan mengambil info error jika terdapat error
  const { error } = updateUser.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    // jika terdapat error, akan memberikan pesan seperti ini
    return response.status(400).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
  }
  return next();
};

export const verifyDataSiswa = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // validasi data dari request body dan mengambil info error jika terdapat error
  const { error } = dataSiswa.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    // jika terdapat error, akan memberikan pesan seperti ini
    return response.status(400).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
  }
  return next();
};

export const verifyUpdateDataSiswa = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // validasi data dari request body dan mengambil info error jika terdapat error
  const { error } = updateDataSiswa.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    // jika terdapat error, akan memberikan pesan seperti ini
    return response.status(400).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
  }
  return next();
};

export const verifyDataStan = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // validasi data dari request body dan mengambil info error jika terdapat error
  const { error } = dataStan.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    // jika terdapat error, akan memberikan pesan seperti ini
    return response.status(400).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
  }
  return next();
};

export const verifyUpdateDataStan = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // validasi data dari request body dan mengambil info error jika terdapat error
  const { error } = updateDataStan.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    // jika terdapat error, akan memberikan pesan seperti ini
    return response.status(400).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
  }
  return next();
};
