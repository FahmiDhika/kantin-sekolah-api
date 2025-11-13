"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStan = exports.dataStan = exports.updateSiswa = exports.dataSiswa = exports.deleteUser = exports.register = exports.updateUser = exports.authentication = exports.getUser = void 0;
const client_1 = require("../../generated/prisma/client");
const md5_1 = __importDefault(require("md5"));
const uuid_1 = require("uuid");
const jsonwebtoken_1 = require("jsonwebtoken");
const global_1 = require("../global");
const fs_1 = __importDefault(require("fs"));
const prisma = new client_1.PrismaClient({ errorFormat: "pretty" });
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nama } = req.query;
        const user = yield prisma.siswa.findMany({
            where: { nama: { contains: (nama === null || nama === void 0 ? void 0 : nama.toString()) || "" } },
        });
        res.status(200).json({
            status: "success",
            message: `User berhasil ditampilkan.`,
            data: user,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: error,
            message: `Terjadi sebuah kesalahan : ${error}.`,
        });
        return;
    }
});
exports.getUser = getUser;
const authentication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const findUser = yield prisma.users.findFirst({
            where: { username, password: (0, md5_1.default)(password) },
        });
        if (!findUser) {
            res.status(200).json({
                status: false,
                logged: false,
                message: `Username atau Password invalid!`,
            });
            return;
        }
        let data = {
            id: findUser === null || findUser === void 0 ? void 0 : findUser.id,
            username: findUser === null || findUser === void 0 ? void 0 : findUser.username,
            password: findUser === null || findUser === void 0 ? void 0 : findUser.password,
            role: findUser === null || findUser === void 0 ? void 0 : findUser.role,
        };
        let payload = JSON.stringify(data);
        let secretKey = global_1.SECRET || "";
        let token = (0, jsonwebtoken_1.sign)(payload, secretKey);
        res.status(200).json({
            status: "success",
            logged: true,
            message: `Login sukses.`,
            token,
            data,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: error,
            message: `Terjadi sebuah kesalahan : ${error}.`,
        });
        return;
    }
});
exports.authentication = authentication;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { username, password } = req.body;
        const findUser = yield prisma.users.findFirst({
            where: { id: Number(id) },
        });
        if (!findUser) {
            res.status(200).json({
                status: false,
                message: `User tidak ditemukan.`,
            });
            return;
        }
        const updateUser = yield prisma.users.update({
            data: {
                username: username || (findUser === null || findUser === void 0 ? void 0 : findUser.username),
                password: password || (findUser === null || findUser === void 0 ? void 0 : findUser.password),
            },
            where: { id: Number(id) },
        });
        res.status(200).json({
            status: "success",
            message: `Data user berhasil di update.`,
            data: updateUser,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: error,
            message: `Terjadi sebuah kesalahan : ${error}.`,
        });
        return;
    }
});
exports.updateUser = updateUser;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, role } = req.body;
        const register = yield prisma.users.create({
            data: {
                username,
                password: (0, md5_1.default)(password),
                role,
            },
        });
        res.status(200).json({
            status: "success",
            message: `User berhasil dibuat.`,
            data: register,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: error,
            message: `Terjadi sebuah kesalahan : ${error}.`,
        });
        return;
    }
});
exports.register = register;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const findUser = yield prisma.users.findFirst({
            where: { id: Number(id) },
        });
        if (!findUser) {
            res.status(200).json({
                status: false,
                message: `User tidak ditemukan.`,
            });
            return;
        }
        const deleteUser = yield prisma.users.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({
            status: "success",
            message: `User berhasil dihapus`,
            data: deleteUser,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: error,
            message: `Terjadi sebuah kesalahan : ${error}.`,
        });
        return;
    }
});
exports.deleteUser = deleteUser;
// SISWA
const dataSiswa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nama, alamat, telepon, foto } = req.body;
        const uuid = (0, uuid_1.v4)();
        let filename = "";
        if (req.file) {
            filename = req.file.filename;
        }
        const data = yield prisma.siswa.create({
            data: {
                uuid,
                nama,
                alamat,
                telepon,
                foto: filename,
                id_user: Number(id),
            },
        });
        res.status(200).json({
            status: "success",
            message: `Terima kasih telah mendaftar.`,
            data,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: error,
            message: `Terjadi sebuah kesalahan : ${error}.`,
        });
        return;
    }
});
exports.dataSiswa = dataSiswa;
const updateSiswa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nama, alamat, telepon, foto } = req.body;
        const findSiswa = yield prisma.siswa.findFirst({
            where: { id: Number(id) },
        });
        if (!findSiswa) {
            res.status(200).json({
                status: false,
                message: `Siswa tidak ditemukan.`,
            });
            return;
        }
        let filename = findSiswa === null || findSiswa === void 0 ? void 0 : findSiswa.foto;
        if (req.file) {
            filename = req.file.filename;
            let path = `${global_1.BASE_URL}../upload/user_picture/${findSiswa === null || findSiswa === void 0 ? void 0 : findSiswa.foto}`;
            let exists = fs_1.default.existsSync(path);
            if (exists && (findSiswa === null || findSiswa === void 0 ? void 0 : findSiswa.foto) !== ``) {
                fs_1.default.unlinkSync(path);
            }
        }
        const updateSiswa = yield prisma.siswa.update({
            data: {
                nama: nama || (findSiswa === null || findSiswa === void 0 ? void 0 : findSiswa.nama),
                alamat: alamat || (findSiswa === null || findSiswa === void 0 ? void 0 : findSiswa.alamat),
                telepon: telepon || (findSiswa === null || findSiswa === void 0 ? void 0 : findSiswa.telepon),
                foto: filename,
            },
            where: { id: Number(id) },
        });
        res.status(200).json({
            status: "success",
            message: `Data siswa berhasil di update.`,
            data: updateSiswa,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: error,
            message: `Terjadi sebuah kesalahan : ${error}.`,
        });
        return;
    }
});
exports.updateSiswa = updateSiswa;
// ADMIN STAN
const dataStan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nama_stan, nama_pemilik, telepon } = req.body;
        const data = yield prisma.stan.create({
            data: {
                nama_stan,
                nama_pemilik,
                telepon,
                id_user: Number(id),
            },
        });
        res.status(200).json({
            status: "success",
            message: `Terima kasih telah mendaftar.`,
            data,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: error,
            message: `Terjadi sebuah kesalahan : ${error}.`,
        });
        return;
    }
});
exports.dataStan = dataStan;
const updateStan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nama_stan, nama_pemilik, telepon } = req.body;
        const findStan = yield prisma.stan.findFirst({
            where: { id: Number(id) },
        });
        if (!findStan) {
            res.status(200).json({
                status: false,
                message: `Stan tidak ditemukan.`,
            });
            return;
        }
        const updateStan = yield prisma.stan.update({
            data: {
                nama_stan: nama_stan || (findStan === null || findStan === void 0 ? void 0 : findStan.nama_stan),
                nama_pemilik: nama_pemilik || (findStan === null || findStan === void 0 ? void 0 : findStan.nama_pemilik),
                telepon: telepon || (findStan === null || findStan === void 0 ? void 0 : findStan.telepon),
            },
            where: { id: Number(id) },
        });
        res.status(200).json({
            status: "success",
            message: `Data stan ${findStan === null || findStan === void 0 ? void 0 : findStan.nama_stan} berhasil diupdate`,
            data: updateStan,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            status: error,
            message: `Terjadi sebuah kesalahan : ${error}.`,
        });
        return;
    }
});
exports.updateStan = updateStan;
