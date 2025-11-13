"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorization_1 = require("../Middlewares/authorization");
const orderController_1 = require("../Controllers/orderController");
const orderValidation_1 = require("../Middlewares/orderValidation");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/history/siswa", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["SISWA"])], orderController_1.getSiswaHistory);
app.get("/history/stan", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["ADMIN_STAN"])], orderController_1.getStanHistory);
app.post("/create", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["SISWA"]), orderValidation_1.verifyCreateOrder], orderController_1.createOrder);
app.put("/update/:id", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["ADMIN_STAN"]), orderValidation_1.verifyUpdateStatus], orderController_1.updateStatus);
app.delete("/delete/:id", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["SISWA"])], orderController_1.deleteOrder);
exports.default = app;
