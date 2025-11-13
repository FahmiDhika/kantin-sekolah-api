"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRole = exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const global_1 = require("../global");
const verifyToken = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        res.status(403).json({
            message: `Akses ditolak, Tidak ada token yang disediakan!`,
        });
        return;
    }
    try {
        const secretKey = global_1.SECRET || "";
        const decoded = (0, jsonwebtoken_1.verify)(token, secretKey);
        req.users = decoded;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: false,
            message: `Token tidak valid!`,
        });
    }
};
exports.verifyToken = verifyToken;
const verifyRole = (allowedRole) => {
    return (req, res, next) => {
        const user = req.users;
        if (!user) {
            res
                .status(403)
                .json({ message: `Tidak ada informasi pengguna yang tersedia!` });
            return;
        }
        if (!allowedRole.includes(user.role)) {
            res.status(403).json({
                message: `Akses ditolak, membutuhkan salah satu role : ${allowedRole.join(" ")}`,
            });
        }
        next();
    };
};
exports.verifyRole = verifyRole;
