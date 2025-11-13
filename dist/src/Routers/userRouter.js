"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../Controllers/userController");
const userValidation_1 = require("../Middlewares/userValidation");
const authorization_1 = require("../Middlewares/authorization");
const userUpload_ts_1 = __importDefault(require("../Middlewares/userUpload.ts"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// end point general
app.post("/register", userValidation_1.verifyRegister, userController_1.register);
app.post("/login", userValidation_1.verifyAuthentication, userController_1.authentication);
app.put("/update/:id", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["ADMIN_STAN", "SISWA"]), userValidation_1.verifyUpdateUser], userController_1.updateUser);
app.delete("/delete/:id", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["ADMIN_STAN", "SISWA"])], userController_1.deleteUser);
// end point siswa
app.post("/dataSiswa/:id", [
    authorization_1.verifyToken,
    (0, authorization_1.verifyRole)(["SISWA"]),
    userUpload_ts_1.default.single("foto"),
    userValidation_1.verifyDataSiswa,
], userController_1.dataSiswa);
app.put("/updateSiswa/:id", [
    authorization_1.verifyToken,
    (0, authorization_1.verifyRole)(["SISWA"]),
    userUpload_ts_1.default.single("foto"),
    userValidation_1.verifyUpdateDataSiswa,
], userController_1.updateSiswa);
// end point admin stan
app.get("/get", userController_1.getUser);
app.post("/dataStan/:id", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["ADMIN_STAN"]), userValidation_1.verifyDataStan], userController_1.dataStan);
app.put("/updateStan/:id", [authorization_1.verifyToken, (0, authorization_1.verifyRole)(["ADMIN_STAN"]), userValidation_1.verifyUpdateDataStan], userController_1.updateStan);
exports.default = app;
