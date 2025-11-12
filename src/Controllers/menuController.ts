import { PrismaClient } from "../../generated/prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getAllMenus = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    const allMenus = await prisma.menu.findMany({
      where: { nama_menu: { contains: search?.toString() || "" } },
    });

    res.status(200).json({
      status: "success",
      message: `Menu berhasil ditampilkan.`,
      data: allMenus,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
  }
};
