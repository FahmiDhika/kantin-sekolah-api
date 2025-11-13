import { PrismaClient } from "../../generated/prisma/client";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getSiswaHistory = async (req: Request, res: Response) => {
  try {
    const { search, tanggal, bulan, tahun } = req.query;
    const user = (req as any).users;

    let whereTransaksi: any = {
      id_siswa: user.id,
    };

    if (tanggal) {
      const tgl = new Date(tanggal.toString());
      whereTransaksi.tanggal = {
        gte: new Date(tgl.setHours(0, 0, 0, 0)),
        lte: new Date(tgl.setHours(23, 59, 59, 999)),
      };
    } else if (bulan) {
      const m = Number(bulan) - 1;
      const y = Number(tahun);
      whereTransaksi.tanggal = {
        gte: new Date(y, m, 1, 0, 0, 0, 0),
        lte: new Date(y, m + 1, 0, 23, 59, 59, 999),
      };
    }

    let history = await prisma.transaksi.findMany({
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
      history = history.filter((t) =>
        t.detail_transaksi.some((d) =>
          d.menu.nama_menu.toLowerCase().includes(keyword)
        )
      );
    }

    res.status(200).json({
      status: "success",
      message: `Riwayat transaksi berhasil ditampilkan.`,
      data: history,
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

export const getStanHistory = async (req: Request, res: Response) => {
  try {
    const { search, tanggal, bulan, tahun } = req.query;
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

    const whereTransaksi: any = {
      id_stan: stan.id,
    };

    if (tanggal) {
      const tgl = new Date(tanggal.toString());
      whereTransaksi.tanggal = {
        gte: new Date(tgl.setHours(0, 0, 0, 0)),
        lte: new Date(tgl.setHours(23, 59, 59, 999)),
      };
    } else if (bulan && tahun) {
      const m = Number(bulan) - 1;
      const y = Number(tahun);
      whereTransaksi.tanggal = {
        gte: new Date(y, m, 1, 0, 0, 0, 0),
        lte: new Date(y, m + 1, 0, 23, 59, 59, 999),
      };
    }

    let history = await prisma.transaksi.findMany({
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
      history = history.filter((t) =>
        t.detail_transaksi.some((d) =>
          d.menu.nama_menu.toLowerCase().includes(keyword)
        )
      );
    }

    res.status(200).json({
      status: "success",
      message: `Riwayat transaksi stan "${stan.nama_stan}" berhasil ditampilkan.`,
      data: history,
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

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { id_stan, items } = req.body;
    const user = (req as any).users;
    const uuid = uuidv4();

    const stan = await prisma.stan.findFirst({
      where: { id: Number(id_stan) },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: `Stan tidak ditemukan.`,
      });
      return;
    }

    const id_menu = items.map((i: any) => i.id_menu);
    const menus = await prisma.menu.findMany({
      where: { id: { in: id_menu }, id_stan: stan.id },
    });

    if (menus.length !== items.length) {
      res.status(200).json({
        status: false,
        message: `Beberapa menu tidak ditemukan di stan ini.`,
      });
      return;
    }

    const order = await prisma.transaksi.create({
      data: {
        uuid,
        id_stan: stan.id,
        id_siswa: user.id,
      },
    });

    const detailData = items.map((i: any) => {
      const menu = menus.find((m) => m.id === i.id_menu);
      return {
        id_transaksi: order.id,
        id_menu: menu!.id,
        jumlah: i.jumlah,
        harga_total: Number(menu!.harga) * i.jumlah,
      };
    });

    const detail_transaksi = await prisma.detail_transaksi.createMany({
      data: detailData,
    });

    const transaksiWithDetails = await prisma.transaksi.findUnique({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const user = (req as any).users;

    const stan = await prisma.stan.findFirst({
      where: { id_user: Number(user.id) },
    });

    if (!stan) {
      res.status(200).json({
        status: false,
        message: `Stan tidak ditemukan.`,
      });
      return;
    }

    const findTransaksi = await prisma.transaksi.findFirst({
      where: { id: Number(id), id_stan: stan.id },
    });

    if (!findTransaksi) {
      res.status(200).json({
        status: false,
        message: `Transaksi tidak ditemukan atau bukan milik stan anda.`,
      });
      return;
    }

    const updateTransaksi = await prisma.transaksi.update({
      where: { id: findTransaksi.id },
      data: { status },
    });

    res.status(200).json({
      status: "success",
      message: `Status transaksi berhasil diperbarui menjadi ${status}`,
      data: updateTransaksi,
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

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = (req as any).users;

    const findTransaksi = await prisma.transaksi.findFirst({
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

    await prisma.detail_transaksi.deleteMany({
      where: { id_transaksi: findTransaksi.id },
    });

    await prisma.transaksi.delete({
      where: { id: findTransaksi.id },
    });

    res.status(200).json({
      status: "success",
      message: `Transaksi dengan id ${id} berhasil dihapus.`,
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
