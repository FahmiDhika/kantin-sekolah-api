"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const menuRouter_1 = __importDefault(require("./Routers/menuRouter"));
const userRouter_1 = __importDefault(require("./Routers/userRouter"));
const diskonRouter_1 = __importDefault(require("./Routers/diskonRouter"));
const orderRouter_1 = __importDefault(require("./Routers/orderRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/user", userRouter_1.default);
app.use("/menu", menuRouter_1.default);
app.use("/diskon", diskonRouter_1.default);
app.use("/order", orderRouter_1.default);
app.get("/", (req, res) => {
    res
        .status(200)
        .json({ status: "success", message: "Welcome to Kantin Sekolah API" });
    return;
});
