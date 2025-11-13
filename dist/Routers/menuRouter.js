"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menuController_1 = require("../Controllers/menuController");
const authorization_1 = require("../Middlewares/authorization");
const menuValidation_1 = require("../Middlewares/menuValidation");
const menuUpload_1 = __importDefault(require("../Middlewares/menuUpload"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/getKantin", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["SISWA"])], menuController_1.getAllMenusForSiswa);
app.get("/get", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["ADMIN_STAN"])], menuController_1.getAllMenus);
app.post("/add", [
    authorization_1.verifyToken,
    (0, authorization_1.verifyRole)(["ADMIN_STAN"]),
    menuUpload_1.default.single("foto"),
    menuValidation_1.verifyAddMenu,
], menuController_1.addMenu);
app.put("/update/:id", [
    authorization_1.verifyToken,
    (0, authorization_1.verifyRole)(["ADMIN_STAN"]),
    menuUpload_1.default.single("foto"),
    menuValidation_1.verifyUpdateMenu,
], menuController_1.updateMenu);
app.delete("/delete/:id", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["ADMIN_STAN"])], menuController_1.deleteMenu);
exports.default = app;
