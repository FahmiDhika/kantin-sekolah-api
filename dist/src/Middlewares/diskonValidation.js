"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUpdateDiskon = exports.verifyCreateDiskon = void 0;
const joi_1 = __importDefault(require("joi"));
const createDiskonSchema = joi_1.default.object({
    nama_diskon: joi_1.default.string().required().messages({
        "string.empty": "Nama diskon tidak boleh kosong.",
        "any.required": "Nama diskon wajib diisi.",
    }),
    persentase: joi_1.default.number().min(0).max(100).required().messages({
        "number.base": "Persentase harus berupa angka.",
        "number.min": "Persentase minimal 0.",
        "number.max": "Persentase maksimal 100.",
        "any.required": "Persentase wajib diisi.",
    }),
    tanggal_awal: joi_1.default.date().required().messages({
        "date.base": "Tanggal awal harus berupa tanggal yang valid.",
        "any.required": "Tanggal awal wajib diisi.",
    }),
    tanggal_akhir: joi_1.default.date()
        .required()
        .greater(joi_1.default.ref("tanggal_awal"))
        .messages({
        "date.greater": "Tanggal akhir harus lebih besar dari tanggal awal.",
        "any.required": "Tanggal akhir wajib diisi.",
    }),
});
const updateDiskonSchema = joi_1.default.object({
    nama_diskon: joi_1.default.string().optional(),
    persentase: joi_1.default.number().min(0).max(100).optional(),
    tanggal_awal: joi_1.default.date().optional(),
    tanggal_akhir: joi_1.default.date().optional().greater(joi_1.default.ref("tanggal_awal")),
}).or("nama_diskon", "persentase", "tanggal_awal", "tanggal_akhir");
const verifyCreateDiskon = (request, response, next) => {
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
exports.verifyCreateDiskon = verifyCreateDiskon;
const verifyUpdateDiskon = (request, response, next) => {
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
exports.verifyUpdateDiskon = verifyUpdateDiskon;
