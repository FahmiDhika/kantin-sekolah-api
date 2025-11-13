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
exports.deleteMenu = exports.updateMenu = exports.addMenu = exports.getAllMenus = exports.getAllMenusForSiswa = void 0;
const client_1 = require("../../generated/prisma/client");
const fs_1 = __importDefault(require("fs"));
const global_1 = require("../global");
const prisma = new client_1.PrismaClient({ errorFormat: "pretty" });
const getAllMenusForSiswa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search, jenis, harga_min, harga_max, id_stan } = req.query;
        let nama_stan = "Semua kantin";
        if (id_stan) {
            const stan = yield prisma.stan.findFirst({
                where: { id: Number(id_stan) },
                select: { nama_stan: true },
            });
            if (!stan) {
                res.status(200).json({
                    status: false,
                    message: `Kantin dengan ID ${id_stan} tidak ditemukan.`,
                });
                return;
            }
            nama_stan = stan.nama_stan;
        }
        const findMenu = yield prisma.menu.findMany({
            where: {
                id_stan: id_stan ? Number(id_stan) : undefined,
                nama_menu: {
                    contains: search ? search.toString() : "",
                    mode: "insensitive",
                },
                jenis: jenis
                    ? {
                        equals: jenis.toString().toUpperCase(),
                    }
                    : undefined,
                harga: harga_min || harga_max
                    ? {
                        gte: harga_min ? Number(harga_min) : undefined,
                        lte: harga_max ? Number(harga_max) : undefined,
                    }
                    : undefined,
            },
            include: {
                stan: {
                    select: {
                        id: true,
                        nama_stan: true,
                    },
                },
            },
            orderBy: { nama_menu: "asc" },
        });
        res.status(200).json({
            status: "success",
            message: `Menu kantin berhasil ditampilkan.`,
            data: findMenu,
        });
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
exports.getAllMenusForSiswa = getAllMenusForSiswa;
const getAllMenus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search, jenis, harga_min, harga_max } = req.query;
        const user = req.users;
        const stan = yield prisma.stan.findFirst({
            where: { id_user: user.id },
        });
        if (!stan) {
            res.status(200).json({
                status: false,
                message: `Stan tidak ditemukan.`,
            });
            return;
        }
        const allMenus = yield prisma.menu.findMany({
            where: {
                id_stan: stan.id,
                nama_menu: {
                    contains: search ? search.toString() : "",
                    mode: "insensitive",
                },
                jenis: jenis
                    ? {
                        equals: jenis.toString().toUpperCase(),
                    }
                    : undefined,
                harga: harga_min || harga_max
                    ? {
                        gte: harga_min ? Number(harga_min) : undefined,
                        lte: harga_max ? Number(harga_max) : undefined,
                    }
                    : undefined,
            },
            orderBy: {
                nama_menu: "asc",
            },
        });
        res.status(200).json({
            status: "success",
            message: `Menu berhasil ditampilkan.`,
            data: allMenus,
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
exports.getAllMenus = getAllMenus;
const addMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nama_menu, harga, jenis, deskripsi } = req.body;
        const user = req.users;
        const stan = yield prisma.stan.findFirst({
            where: { id_user: user.id },
        });
        if (!stan) {
            return res.status(404).json({
                status: false,
                message: `Stan tidak ditemukan untuk user ini.`,
            });
            return;
        }
        let filename = "";
        if (req.file) {
            filename = req.file.filename;
        }
        const addMenu = yield prisma.menu.create({
            data: {
                nama_menu,
                harga: Number(harga),
                jenis: jenis.toUpperCase(),
                foto: filename,
                deskripsi,
                id_stan: stan.id,
            },
        });
        res.status(200).json({
            status: "success",
            message: `Menu baru berhasil ditambahkan.`,
            data: addMenu,
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
exports.addMenu = addMenu;
const updateMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nama_menu, harga, jenis, deskripsi } = req.body;
        const user = req.users;
        const stan = yield prisma.stan.findFirst({
            where: { id_user: user.id },
        });
        const findMenu = yield prisma.menu.findFirst({
            where: { id: Number(id) },
        });
        if (!findMenu) {
            res.status(200).json({
                status: false,
                message: `Menu tidak ditemukan.`,
            });
            return;
        }
        let filename = findMenu === null || findMenu === void 0 ? void 0 : findMenu.foto;
        if (req.file) {
            filename = req.file.filename;
            const path = `${global_1.BASE_URL}../upload/menu_picture/${findMenu === null || findMenu === void 0 ? void 0 : findMenu.foto}`;
            let exists = fs_1.default.existsSync(path);
            if (exists && (findMenu === null || findMenu === void 0 ? void 0 : findMenu.foto) !== ``) {
                fs_1.default.unlinkSync(path);
            }
        }
        const updateMenu = yield prisma.menu.update({
            data: {
                nama_menu: nama_menu || (findMenu === null || findMenu === void 0 ? void 0 : findMenu.nama_menu),
                harga: harga || (findMenu === null || findMenu === void 0 ? void 0 : findMenu.harga),
                jenis: jenis || (findMenu === null || findMenu === void 0 ? void 0 : findMenu.jenis),
                deskripsi: deskripsi || (findMenu === null || findMenu === void 0 ? void 0 : findMenu.deskripsi),
                foto: filename,
            },
            where: { id: Number(id) },
        });
        res.status(200).json({
            status: "success",
            message: `Menu berhasil diupdate.`,
            data: updateMenu,
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
exports.updateMenu = updateMenu;
const deleteMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = req.users;
        const stan = yield prisma.stan.findFirst({
            where: { id_user: user.id },
        });
        if (!stan) {
            res.status(200).json({
                status: false,
                message: `Stan tidak ditemukan.`,
            });
            return;
        }
        const findMenu = yield prisma.menu.findFirst({
            where: {
                id: Number(id),
                id_stan: stan.id,
            },
        });
        if (!findMenu) {
            res.status(200).json({
                status: false,
                message: `Menu tidak ditemukan atau bukan milik anda.`,
            });
            return;
        }
        const deleteMenu = yield prisma.menu.delete({
            where: { id: Number(id) },
        });
        let path = `${global_1.BASE_URL}../upload/menu_picture/${findMenu === null || findMenu === void 0 ? void 0 : findMenu.foto}`;
        let exists = fs_1.default.existsSync(path);
        if (exists && (findMenu === null || findMenu === void 0 ? void 0 : findMenu.foto) !== ``) {
            fs_1.default.unlinkSync(path);
        }
        res.status(200).json({
            status: "success",
            message: `Menu berhasil dihapus.`,
            data: deleteMenu,
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
exports.deleteMenu = deleteMenu;
