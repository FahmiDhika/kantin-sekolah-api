"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const uploadFile = (0, multer_1.default)({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 },
});
exports.default = uploadFile;
// import { Request } from "express";
// import multer from "multer";
// import { BASE_URL } from "../global";
// const storage = multer.diskStorage({
//   destination: (
//     req: Request,
//     file: Express.Multer.File,
//     cb: (error: Error | null, destination: string) => void
//   ) => {
//     cb(null, `${BASE_URL}/upload/user_picture/`);
//   },
//   filename: (
//     req: Request,
//     file: Express.Multer.File,
//     cb: (error: Error | null, destination: string) => void
//   ) => {
//     cb(null, `${new Date().getTime().toString()}-${file.originalname}`);
//   },
// });
// const uploadFile = multer({
//   storage,
//   limits: { fileSize: 2 * 1024 * 1024 },
// });
// export default uploadFile;
