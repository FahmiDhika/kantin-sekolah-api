import { PrismaClient } from "../generated/prisma/client";
import { Request, Response } from "express";
import dayjs from "dayjs";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getDiskonByStan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const now = dayjs();

    const stan = await prisma.stan.findFirst({
      where: { id: Number(id) },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: "Stan tidak ditemukan",
      });
      return;
    }

    const activeDiskon = await prisma.diskon.findMany({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const getAllDiskon = async (req: Request, res: Response) => {
  try {
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({ where: { id_user: user.id } });
    if (!stan) {
      res.status(200).json({
        status: false,
        message: "Stan tidak ditemukan.",
      });
      return;
    }

    const diskon = await prisma.diskon.findMany({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const getActiveDiskon = async (req: Request, res: Response) => {
  try {
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({
      where: { id_user: user.id },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: "Stan tidak ditemukan.",
      });
      return;
    }

    const now = dayjs();

    const activeDiskon = await prisma.diskon.findMany({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const createDiskon = async (req: Request, res: Response) => {
  try {
    const { nama_diskon, persentase, tanggal_awal, tanggal_akhir } = req.body;
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({
      where: { id_user: user.id },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: "Stan tidak ditemukan.",
      });
      return;
    }

    const diskon = await prisma.diskon.create({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const updateDiskon = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nama_diskon, persentase, tanggal_awal, tanggal_akhir } = req.body;
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({
      where: { id_user: user.id },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: "Stan tidak ditemukan.",
      });
      return;
    }

    const findDiskon = await prisma.diskon.findFirst({
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

    const updateDiskon = await prisma.diskon.update({
      where: { id: Number(id) },
      data: {
        nama_diskon: nama_diskon ?? findDiskon.nama_diskon,
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const deleteDiskon = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({
      where: { id_user: user.id },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: "Stan tidak ditemukan.",
      });
      return;
    }

    const findDiskon = await prisma.diskon.findFirst({
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

    const deleteDiskon = await prisma.diskon.delete({
      where: { id: findDiskon.id },
    });

    res.status(200).json({
      status: "success",
      message: `Diskon "${findDiskon.nama_diskon}" milik stan ${stan.nama_stan} berhasil dihapus.`,
      data: deleteDiskon,
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const pasangDiskon = async (req: Request, res: Response) => {
  try {
    const { id_diskon, id_menus } = req.body;
    const user = (req as any).users;

    if (!Array.isArray(id_menus) || id_menus.length === 0) {
      res.status(200).json({
        status: false,
        message: "Harus ada setidaknya satu menu untuk diberikan diskon.",
      });
      return;
    }

    const stan = await prisma.stan.findFirst({
      where: { id_user: user.id },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: "Stan tidak ditemukan.",
      });
      return;
    }

    const findDiskon = await prisma.diskon.findFirst({
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

    const menus = await prisma.menu.findMany({
      where: {
        id: { in: id_menus.map((id: any) => Number(id)) },
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
    const existingAssignments = await prisma.menu_diskon.findMany({
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

    const newAssignments = await prisma.menu_diskon.createMany({
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
      await prisma.menu.update({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const lepasDiskon = async (req: Request, res: Response) => {
  try {
    const { id_diskon, id_menus } = req.body;
    const user = (req as any).users;

    if (!Array.isArray(id_menus) || id_menus.length === 0) {
      res.status(200).json({
        status: false,
        message: "Harus ada setidaknya satu menu untuk diberikan diskon.",
      });
      return;
    }

    const stan = await prisma.stan.findFirst({
      where: { id_user: user.id },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: "Stan tidak ditemukan.",
      });
      return;
    }

    const findDiskon = await prisma.diskon.findFirst({
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

    const deleteMenuDiskon = await prisma.menu_diskon.deleteMany({
      where: {
        id_diskon: Number(id_diskon),
        id_menu: { in: id_menus.map((id: any) => Number(id)) },
      },
    });

    const menusToUpdate = await prisma.menu.findMany({
      where: { id: { in: id_menus.map((id: any) => Number(id)) } },
    });

    for (const menu of menusToUpdate) {
      const originalHarga =
        Number(menu.harga) / (1 - findDiskon.persentase / 100);

      await prisma.menu.update({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};
