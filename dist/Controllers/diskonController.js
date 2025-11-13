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
exports.lepasDiskon = exports.pasangDiskon = exports.deleteDiskon = exports.updateDiskon = exports.createDiskon = exports.getActiveDiskon = exports.getAllDiskon = exports.getDiskonByStan = void 0;
const client_1 = require("../generated/prisma/client");
const dayjs_1 = __importDefault(require("dayjs"));
const prisma = new client_1.PrismaClient({ errorFormat: "pretty" });
const getDiskonByStan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const now = (0, dayjs_1.default)();
        const stan = yield prisma.stan.findFirst({
            where: { id: Number(id) },
        });
        if (!stan) {
            res.status(200).json({
                status: false,
                message: "Stan tidak ditemukan",
            });
            return;
        }
        const activeDiskon = yield prisma.diskon.findMany({
            where: {
                id_stan: Number(id),
                tanggal_awal: { lte: now.toDate() },
                tanggal_akhir: { gte: now.toDate() },
            },
            include: {
                menu_diskon: {
                    include: { menu: true },
                },
            },
            orderBy: { tanggal_awal: "desc" },
        });
        res.status(200).json({
            status: "success",
            message: `Diskon dari kantin ${stan.nama_stan} berhasil ditampilkan.`,
            data: activeDiskon,
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
exports.getDiskonByStan = getDiskonByStan;
const getAllDiskon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.users;
        const stan = yield prisma.stan.findFirst({ where: { id_user: user.id } });
        if (!stan) {
            res.status(200).json({
                status: false,
                message: "Stan tidak ditemukan.",
            });
            return;
        }
        const diskon = yield prisma.diskon.findMany({
            where: { id_stan: stan.id },
            include: {
                menu_diskon: {
                    include: {
                        menu: true,
                    },
                },
            },
            orderBy: {
                tanggal_awal: "desc",
            },
        });
        res.status(200).json({
            status: "success",
            message: `Semua diskon dari stan ${stan.nama_stan} berhasil ditampilkan.`,
            data: diskon,
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
exports.getAllDiskon = getAllDiskon;
const getActiveDiskon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
        const now = (0, dayjs_1.default)();
        const activeDiskon = yield prisma.diskon.findMany({
            where: {
                id_stan: stan.id,
                tanggal_awal: { lte: now.toDate() },
                tanggal_akhir: { gte: now.toDate() },
            },
            include: {
                menu_diskon: {
                    include: { menu: true },
                },
            },
        });
        res.status(200).json({
            status: "success",
            message: `Diskon aktif dari stan ${stan.nama_stan} berhasil ditampilkan.`,
            data: activeDiskon,
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
exports.getActiveDiskon = getActiveDiskon;
const createDiskon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nama_diskon, persentase, tanggal_awal, tanggal_akhir } = req.body;
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
        const diskon = yield prisma.diskon.create({
            data: {
                nama_diskon,
                persentase: Number(persentase),
                tanggal_awal: new Date(tanggal_awal),
                tanggal_akhir: new Date(tanggal_akhir),
                id_stan: stan.id,
            },
        });
        res.status(200).json({
            status: "success",
            message: `Diskon baru berhasil dibuat untuk stan ${stan.nama_stan}.`,
            data: diskon,
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
exports.createDiskon = createDiskon;
const updateDiskon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nama_diskon, persentase, tanggal_awal, tanggal_akhir } = req.body;
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
        const findDiskon = yield prisma.diskon.findFirst({
            where: {
                id: Number(id),
                id_stan: stan.id,
            },
        });
        if (!findDiskon) {
            res.status(200).json({
                status: false,
                message: "Diskon tidak ditemukan atau bukan milik anda.",
            });
            return;
        }
        const updateDiskon = yield prisma.diskon.update({
            where: { id: Number(id) },
            data: {
                nama_diskon: nama_diskon !== null && nama_diskon !== void 0 ? nama_diskon : findDiskon.nama_diskon,
                persentase: persentase ? Number(persentase) : findDiskon.persentase,
                tanggal_awal: tanggal_awal
                    ? new Date(tanggal_awal)
                    : findDiskon.tanggal_awal,
                tanggal_akhir: tanggal_akhir
                    ? new Date(tanggal_akhir)
                    : findDiskon.tanggal_akhir,
            },
        });
        res.status(200).json({
            status: "success",
            message: `Data diskon berhasil diperbarui untuk stan ${stan.nama_stan}.`,
            data: updateDiskon,
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
exports.updateDiskon = updateDiskon;
const deleteDiskon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
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
        const findDiskon = yield prisma.diskon.findFirst({
            where: {
                id: Number(id),
                id_stan: stan.id,
            },
        });
        if (!findDiskon) {
            res.status(200).json({
                status: false,
                message: "Diskon tidak ditemukan atau bukan milik anda.",
            });
            return;
        }
        const deleteDiskon = yield prisma.diskon.delete({
            where: { id: findDiskon.id },
        });
        res.status(200).json({
            status: "success",
            message: `Diskon "${findDiskon.nama_diskon}" milik stan ${stan.nama_stan} berhasil dihapus.`,
            data: deleteDiskon,
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
exports.deleteDiskon = deleteDiskon;
const pasangDiskon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_diskon, id_menus } = req.body;
        const user = req.users;
        if (!Array.isArray(id_menus) || id_menus.length === 0) {
            res.status(200).json({
                status: false,
                message: "Harus ada setidaknya satu menu untuk diberikan diskon.",
            });
            return;
        }
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
        const findDiskon = yield prisma.diskon.findFirst({
            where: {
                id: Number(id_diskon),
                id_stan: stan.id,
            },
        });
        if (!findDiskon) {
            res.status(200).json({
                status: false,
                message: "Diskon tidak ditemukan atau bukan milik anda.",
            });
            return;
        }
        const menus = yield prisma.menu.findMany({
            where: {
                id: { in: id_menus.map((id) => Number(id)) },
                id_stan: stan.id,
            },
        });
        if (menus.length !== id_menus.length) {
            res.status(200).json({
                status: false,
                message: "Beberapa menu tidak ditemukan atau bukan milik stan Anda.",
            });
            return;
        }
        // Filter menu yang belum punya diskon yang sama
        const existingAssignments = yield prisma.menu_diskon.findMany({
            where: {
                id_diskon: Number(id_diskon),
                id_menu: { in: menus.map((m) => m.id) },
            },
        });
        const existingMenuIds = existingAssignments.map((m) => m.id_menu);
        const menusToAssign = menus.filter((m) => !existingMenuIds.includes(m.id));
        if (menusToAssign.length === 0) {
            res.status(200).json({
                status: false,
                message: "Semua menu sudah memiliki diskon ini.",
            });
            return;
        }
        const newAssignments = yield prisma.menu_diskon.createMany({
            data: menusToAssign.map((m) => ({
                id_diskon: Number(id_diskon),
                id_menu: m.id,
            })),
            skipDuplicates: true,
        });
        const menusToUpdate = menusToAssign.map((menu) => ({
            id: menu.id,
            newHarga: Number(menu.harga) * (1 - findDiskon.persentase / 100),
        }));
        for (const m of menusToUpdate) {
            yield prisma.menu.update({
                where: { id: m.id },
                data: { harga: m.newHarga },
            });
        }
        res.status(200).json({
            status: "success",
            message: `Diskon berhasil diterapkan ke ${menusToAssign.length} menu.`,
            data: newAssignments,
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
exports.pasangDiskon = pasangDiskon;
const lepasDiskon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_diskon, id_menus } = req.body;
        const user = req.users;
        if (!Array.isArray(id_menus) || id_menus.length === 0) {
            res.status(200).json({
                status: false,
                message: "Harus ada setidaknya satu menu untuk diberikan diskon.",
            });
            return;
        }
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
        const findDiskon = yield prisma.diskon.findFirst({
            where: {
                id: Number(id_diskon),
                id_stan: stan.id,
            },
        });
        if (!findDiskon) {
            res.status(200).json({
                status: false,
                message: "Diskon tidak ditemukan atau bukan milik anda.",
            });
            return;
        }
        const deleteMenuDiskon = yield prisma.menu_diskon.deleteMany({
            where: {
                id_diskon: Number(id_diskon),
                id_menu: { in: id_menus.map((id) => Number(id)) },
            },
        });
        const menusToUpdate = yield prisma.menu.findMany({
            where: { id: { in: id_menus.map((id) => Number(id)) } },
        });
        for (const menu of menusToUpdate) {
            const originalHarga = Number(menu.harga) / (1 - findDiskon.persentase / 100);
            yield prisma.menu.update({
                where: { id: menu.id },
                data: { harga: originalHarga },
            });
        }
        res.status(200).json({
            status: "success",
            message: `Diskon berhasil dilepas dari ${deleteMenuDiskon.count} menu.`,
            data: deleteMenuDiskon,
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
exports.lepasDiskon = lepasDiskon;
