"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUpdateDataStan = exports.verifyDataStan = exports.verifyUpdateDataSiswa = exports.verifyDataSiswa = exports.verifyUpdateUser = exports.verifyRegister = exports.verifyAuthentication = void 0;
const joi_1 = __importDefault(require("joi"));
const registerSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().min(8).alphanum().required(),
    role: joi_1.default.string().valid(`ADMIN_STAN`, `SISWA`).required(),
});
const updateUser = joi_1.default.object({
    username: joi_1.default.string().optional(),
    password: joi_1.default.string().min(8).alphanum().optional(),
    users: joi_1.default.optional(),
});
const dataSiswa = joi_1.default.object({
    nama: joi_1.default.string().required(),
    alamat: joi_1.default.string().required(),
    telepon: joi_1.default.string().required(),
    foto: joi_1.default.allow().optional(),
    users: joi_1.default.optional(),
});
const updateDataSiswa = joi_1.default.object({
    nama: joi_1.default.string().optional(),
    alamat: joi_1.default.string().optional(),
    telepon: joi_1.default.string().optional(),
    foto: joi_1.default.allow().optional(),
    users: joi_1.default.optional(),
});
const dataStan = joi_1.default.object({
    nama_stan: joi_1.default.string().required(),
    nama_pemilik: joi_1.default.string().required(),
    telepon: joi_1.default.string().required(),
    users: joi_1.default.optional(),
});
const updateDataStan = joi_1.default.object({
    nama_stan: joi_1.default.string().optional(),
    nama_pemilik: joi_1.default.string().optional(),
    telepon: joi_1.default.string().optional(),
    users: joi_1.default.optional(),
});
const authSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().min(8).alphanum().required(),
});
const verifyAuthentication = (req, res, next) => {
    const { error } = authSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(200).json({
            status: false,
            message: error.details.map((it) => it.message).join(),
        });
    }
    return next();
};
exports.verifyAuthentication = verifyAuthentication;
const verifyRegister = (request, response, next) => {
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
exports.verifyRegister = verifyRegister;
const verifyUpdateUser = (request, response, next) => {
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
exports.verifyUpdateUser = verifyUpdateUser;
const verifyDataSiswa = (request, response, next) => {
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
exports.verifyDataSiswa = verifyDataSiswa;
const verifyUpdateDataSiswa = (request, response, next) => {
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
exports.verifyUpdateDataSiswa = verifyUpdateDataSiswa;
const verifyDataStan = (request, response, next) => {
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
exports.verifyDataStan = verifyDataStan;
const verifyUpdateDataStan = (request, response, next) => {
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
exports.verifyUpdateDataStan = verifyUpdateDataStan;
