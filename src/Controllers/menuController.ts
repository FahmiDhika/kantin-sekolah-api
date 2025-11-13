import { PrismaClient } from "../generated/prisma/client";
import { Request, Response } from "express";
import fs from "fs";
import { BASE_URL } from "../global";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prisma = new PrismaClient({
  datasourceUrl: process.env.PRISMA_ACCELERATE_URL,
}).$extends(withAccelerate());

export const getAllMenusForSiswa = async (req: Request, res: Response) => {
  try {
    const { search, jenis, harga_min, harga_max, id_stan } = req.query;

    let nama_stan = "Semua kantin";

    if (id_stan) {
      const stan = await prisma.stan.findFirst({
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

    const findMenu = await prisma.menu.findMany({
      where: {
        id_stan: id_stan ? Number(id_stan) : undefined,

        nama_menu: {
          contains: search ? search.toString() : "",
          mode: "insensitive",
        },

        jenis: jenis
          ? {
              equals: jenis.toString().toUpperCase() as any,
            }
          : undefined,

        harga:
          harga_min || harga_max
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const getAllMenus = async (req: Request, res: Response) => {
  try {
    const { search, jenis, harga_min, harga_max } = req.query;
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({
      where: { id_user: user.id },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: `Stan tidak ditemukan.`,
      });
      return;
    }

    const allMenus = await prisma.menu.findMany({
      where: {
        id_stan: stan.id,

        nama_menu: {
          contains: search ? search.toString() : "",
          mode: "insensitive",
        },

        jenis: jenis
          ? {
              equals: jenis.toString().toUpperCase() as any,
            }
          : undefined,

        harga:
          harga_min || harga_max
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const addMenu = async (req: Request, res: Response) => {
  try {
    const { nama_menu, harga, jenis, deskripsi } = req.body;
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({
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

    const addMenu = await prisma.menu.create({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const updateMenu = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nama_menu, harga, jenis, deskripsi } = req.body;
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({
      where: { id_user: user.id },
    });

    const findMenu = await prisma.menu.findFirst({
      where: { id: Number(id) },
    });

    if (!findMenu) {
      res.status(200).json({
        status: false,
        message: `Menu tidak ditemukan.`,
      });
      return;
    }

    let filename = findMenu?.foto;

    if (req.file) {
      filename = req.file.filename;

      const path = `${BASE_URL}../upload/menu_picture/${findMenu?.foto}`;
      let exists = fs.existsSync(path);

      if (exists && findMenu?.foto !== ``) {
        fs.unlinkSync(path);
      }
    }

    const updateMenu = await prisma.menu.update({
      data: {
        nama_menu: nama_menu || findMenu?.nama_menu,
        harga: harga || findMenu?.harga,
        jenis: jenis || findMenu?.jenis,
        deskripsi: deskripsi || findMenu?.deskripsi,
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const deleteMenu = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({
      where: { id_user: user.id },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: `Stan tidak ditemukan.`,
      });
      return;
    }

    const findMenu = await prisma.menu.findFirst({
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

    const deleteMenu = await prisma.menu.delete({
      where: { id: Number(id) },
    });

    let path = `${BASE_URL}../upload/menu_picture/${findMenu?.foto}`;
    let exists = fs.existsSync(path);

    if (exists && findMenu?.foto !== ``) {
      fs.unlinkSync(path);
    }

    res.status(200).json({
      status: "success",
      message: `Menu berhasil dihapus.`,
      data: deleteMenu,
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
