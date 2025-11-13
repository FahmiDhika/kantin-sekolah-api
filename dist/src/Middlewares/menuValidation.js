"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUpdateMenu = exports.verifyAddMenu = void 0;
const joi_1 = __importDefault(require("joi"));
const addMenuSchema = joi_1.default.object({
    nama_menu: joi_1.default.string().required(),
    harga: joi_1.default.number().min(0).required(),
    jenis: joi_1.default.string().valid("MAKANAN", "MINUMAN").required(),
    foto: joi_1.default.allow().optional(),
    deskripsi: joi_1.default.string().required(),
});
const updateMenuSchema = joi_1.default.object({
    nama_menu: joi_1.default.string().optional(),
    harga: joi_1.default.number().min(0).optional(),
    jenis: joi_1.default.string().valid("MAKANAN", "MINUMAN").optional(),
    foto: joi_1.default.allow().optional(),
    deskripsi: joi_1.default.string().optional(),
});
const verifyAddMenu = (request, response, next) => {
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
exports.verifyAddMenu = verifyAddMenu;
const verifyUpdateMenu = (request, response, next) => {
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
exports.verifyUpdateMenu = verifyUpdateMenu;
