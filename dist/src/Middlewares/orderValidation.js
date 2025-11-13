"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUpdateStatus = exports.verifyCreateOrder = void 0;
const joi_1 = __importDefault(require("joi"));
const orderListSchema = joi_1.default.object({
    id_menu: joi_1.default.number().required(),
    jumlah: joi_1.default.number().min(1).required(),
    catatan: joi_1.default.string().allow("", null).optional(),
});
const addDataSchema = joi_1.default.object({
    id_stan: joi_1.default.number().required(),
    items: joi_1.default.array().items(orderListSchema).min(1).required(),
});
const updateStatusSchema = joi_1.default.object({
    status: joi_1.default.string()
        .valid("BELUM", "DIMASAK", "SELESAI")
        .uppercase()
        .required(),
});
const verifyCreateOrder = (request, response, next) => {
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
exports.verifyCreateOrder = verifyCreateOrder;
const verifyUpdateStatus = (request, response, next) => {
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
exports.verifyUpdateStatus = verifyUpdateStatus;
