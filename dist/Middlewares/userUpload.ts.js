"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const global_1 = require("../global");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${global_1.BASE_URL}/upload/user_picture/`);
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime().toString()}-${file.originalname}`);
    },
});
const uploadFile = (0, multer_1.default)({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 },
});
exports.default = uploadFile;
