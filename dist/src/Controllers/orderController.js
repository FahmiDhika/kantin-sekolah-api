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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateStatus = exports.createOrder = exports.getStanHistory = exports.getSiswaHistory = void 0;
const client_1 = require("../../generated/prisma/client");
const uuid_1 = require("uuid");
const prisma = new client_1.PrismaClient({ errorFormat: "pretty" });
const getSiswaHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search, tanggal, bulan, tahun } = req.query;
        const user = req.users;
        let whereTransaksi = {
            id_siswa: user.id,
        };
        if (tanggal) {
            const tgl = new Date(tanggal.toString());
            whereTransaksi.tanggal = {
                gte: new Date(tgl.setHours(0, 0, 0, 0)),
                lte: new Date(tgl.setHours(23, 59, 59, 999)),
            };
        }
        else if (bulan) {
            const m = Number(bulan) - 1;
            const y = Number(tahun);
            whereTransaksi.tanggal = {
                gte: new Date(y, m, 1, 0, 0, 0, 0),
                lte: new Date(y, m + 1, 0, 23, 59, 59, 999),
            };
        }
        let history = yield prisma.transaksi.findMany({
            where: whereTransaksi,
            include: {
                stan: true,
                detail_transaksi: {
                    include: {
                        menu: true,
                    },
                },
            },
            orderBy: {
                tanggal: "desc",
            },
        });
        if (search) {
            const keyword = search.toString().toLowerCase();
            history = history.filter((t) => t.detail_transaksi.some((d) => d.menu.nama_menu.toLowerCase().includes(keyword)));
        }
        res.status(200).json({
            status: "success",
            message: `Riwayat transaksi berhasil ditampilkan.`,
            data: history,
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
exports.getSiswaHistory = getSiswaHistory;
const getStanHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search, tanggal, bulan, tahun } = req.query;
        const user = req.users;
        const stan = yield prisma.stan.findFirst({
            where: { id_user: user.id },
        });
        if (!stan) {
            res.status(200).json({
                status: false,
                message: "Stan tidak ditemukan.",
            });
            return;
        }
        const whereTransaksi = {
            id_stan: stan.id,
        };
        if (tanggal) {
            const tgl = new Date(tanggal.toString());
            whereTransaksi.tanggal = {
                gte: new Date(tgl.setHours(0, 0, 0, 0)),
                lte: new Date(tgl.setHours(23, 59, 59, 999)),
            };
        }
        else if (bulan && tahun) {
            const m = Number(bulan) - 1;
            const y = Number(tahun);
            whereTransaksi.tanggal = {
                gte: new Date(y, m, 1, 0, 0, 0, 0),
                lte: new Date(y, m + 1, 0, 23, 59, 59, 999),
            };
        }
        let history = yield prisma.transaksi.findMany({
            where: whereTransaksi,
            include: {
                siswa: true,
                detail_transaksi: {
                    include: {
                        menu: true,
                    },
                },
            },
            orderBy: {
                tanggal: "desc",
            },
        });
        if (search) {
            const keyword = search.toString().toLowerCase();
            history = history.filter((t) => t.detail_transaksi.some((d) => d.menu.nama_menu.toLowerCase().includes(keyword)));
        }
        res.status(200).json({
            status: "success",
            message: `Riwayat transaksi stan "${stan.nama_stan}" berhasil ditampilkan.`,
            data: history,
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
exports.getStanHistory = getStanHistory;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_stan, items } = req.body;
        const user = req.users;
        const uuid = (0, uuid_1.v4)();
        const stan = yield prisma.stan.findFirst({
            where: { id: Number(id_stan) },
        });
        if (!stan) {
            res.status(200).json({
                status: false,
                message: `Stan tidak ditemukan.`,
            });
            return;
        }
        const id_menu = items.map((i) => i.id_menu);
        const menus = yield prisma.menu.findMany({
            where: { id: { in: id_menu }, id_stan: stan.id },
        });
        if (menus.length !== items.length) {
            res.status(200).json({
                status: false,
                message: `Beberapa menu tidak ditemukan di stan ini.`,
            });
            return;
        }
        const order = yield prisma.transaksi.create({
            data: {
                uuid,
                id_stan: stan.id,
                id_siswa: user.id,
            },
        });
        const detailData = items.map((i) => {
            const menu = menus.find((m) => m.id === i.id_menu);
            return {
                id_transaksi: order.id,
                id_menu: menu.id,
                jumlah: i.jumlah,
                harga_total: Number(menu.harga) * i.jumlah,
            };
        });
        const detail_transaksi = yield prisma.detail_transaksi.createMany({
            data: detailData,
        });
        const transaksiWithDetails = yield prisma.transaksi.findUnique({
            where: { id: order.id },
            include: {
                stan: true,
                siswa: true,
                detail_transaksi: { include: { menu: true } },
            },
        });
        res.status(200).json({
            status: true,
            message: `Transaksi berhasil dibuat.`,
            data: transaksiWithDetails,
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
exports.createOrder = createOrder;
const updateStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const user = req.users;
        const stan = yield prisma.stan.findFirst({
            where: { id_user: Number(user.id) },
        });
        if (!stan) {
            res.status(200).json({
                status: false,
                message: `Stan tidak ditemukan.`,
            });
            return;
        }
        const findTransaksi = yield prisma.transaksi.findFirst({
            where: { id: Number(id), id_stan: stan.id },
        });
        if (!findTransaksi) {
            res.status(200).json({
                status: false,
                message: `Transaksi tidak ditemukan atau bukan milik stan anda.`,
            });
            return;
        }
        const updateTransaksi = yield prisma.transaksi.update({
            where: { id: findTransaksi.id },
            data: { status },
        });
        res.status(200).json({
            status: "success",
            message: `Status transaksi berhasil diperbarui menjadi ${status}`,
            data: updateTransaksi,
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
exports.updateStatus = updateStatus;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = req.users;
        const findTransaksi = yield prisma.transaksi.findFirst({
            where: {
                id: Number(id),
                id_siswa: user.id,
            },
            include: {
                detail_transaksi: true,
            },
        });
        if (!findTransaksi) {
            res.status(200).json({
                status: false,
                message: `Transaksi tidak ditemukan atau bukan milik anda.`,
            });
            return;
        }
        if (findTransaksi.status !== "BELUM") {
            res.status(200).json({
                status: false,
                message: `Transaksi sudah berstatus "${findTransaksi.status}" dan tidak bisa dihapus.`,
            });
            return;
        }
        yield prisma.detail_transaksi.deleteMany({
            where: { id_transaksi: findTransaksi.id },
        });
        yield prisma.transaksi.delete({
            where: { id: findTransaksi.id },
        });
        res.status(200).json({
            status: "success",
            message: `Transaksi dengan id ${id} berhasil dihapus.`,
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
exports.deleteOrder = deleteOrder;
