import { PrismaClient } from "../generated/prisma/client";
import { Request, Response } from "express";
import md5 from "md5";
import { v4 as uuidv4 } from "uuid";
import { sign } from "jsonwebtoken";
import { BASE_URL, SECRET } from "../global";
import fs from "fs";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getUser = async (req: Request, res: Response) => {
  try {
    const { nama } = req.query;

    const user = await prisma.siswa.findMany({
      where: { nama: { contains: nama?.toString() || "" } },
    });

    res.status(200).json({
      status: "success",
      message: `User berhasil ditampilkan.`,
      data: user,
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

export const authentication = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const findUser = await prisma.users.findFirst({
      where: { username, password: md5(password) },
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
      id: findUser?.id,
      username: findUser?.username,
      password: findUser?.password,
      role: findUser?.role,
    };

    let payload = JSON.stringify(data);
    let secretKey = SECRET || "";

    let token = sign(payload, secretKey);

    res.status(200).json({
      status: "success",
      logged: true,
      message: `Login sukses.`,
      token,
      data,
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

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const findUser = await prisma.users.findFirst({
      where: { id: Number(id) },
    });

    if (!findUser) {
      res.status(200).json({
        status: false,
        message: `User tidak ditemukan.`,
      });
      return;
    }

    const updateUser = await prisma.users.update({
      data: {
        username: username || findUser?.username,
        password: password || findUser?.password,
      },
      where: { id: Number(id) },
    });

    res.status(200).json({
      status: "success",
      message: `Data user berhasil di update.`,
      data: updateUser,
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

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;

    const register = await prisma.users.create({
      data: {
        username,
        password: md5(password),
        role,
      },
    });

    res.status(200).json({
      status: "success",
      message: `User berhasil dibuat.`,
      data: register,
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

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findUser = await prisma.users.findFirst({
      where: { id: Number(id) },
    });

    if (!findUser) {
      res.status(200).json({
        status: false,
        message: `User tidak ditemukan.`,
      });
      return;
    }

    const deleteUser = await prisma.users.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({
      status: "success",
      message: `User berhasil dihapus`,
      data: deleteUser,
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

// SISWA
export const dataSiswa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nama, alamat, telepon, foto } = req.body;
    const uuid = uuidv4();

    let filename = "";

    if (req.file) {
      filename = req.file.filename;
    }

    const data = await prisma.siswa.create({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const updateSiswa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nama, alamat, telepon, foto } = req.body;

    const findSiswa = await prisma.siswa.findFirst({
      where: { id: Number(id) },
    });

    if (!findSiswa) {
      res.status(200).json({
        status: false,
        message: `Siswa tidak ditemukan.`,
      });
      return;
    }

    let filename = findSiswa?.foto;

    if (req.file) {
      filename = req.file.filename;

      let path = `${BASE_URL}../upload/user_picture/${findSiswa?.foto}`;
      let exists = fs.existsSync(path);

      if (exists && findSiswa?.foto !== ``) {
        fs.unlinkSync(path);
      }
    }

    const updateSiswa = await prisma.siswa.update({
      data: {
        nama: nama || findSiswa?.nama,
        alamat: alamat || findSiswa?.alamat,
        telepon: telepon || findSiswa?.telepon,
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

// ADMIN STAN
export const dataStan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nama_stan, nama_pemilik, telepon } = req.body;

    const data = await prisma.stan.create({
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
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: error,
      message: `Terjadi sebuah kesalahan : ${error}.`,
    });
    return;
  }
};

export const updateStan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nama_stan, nama_pemilik, telepon } = req.body;

    const findStan = await prisma.stan.findFirst({
      where: { id: Number(id) },
    });

    if (!findStan) {
      res.status(200).json({
        status: false,
        message: `Stan tidak ditemukan.`,
      });
      return;
    }

    const updateStan = await prisma.stan.update({
      data: {
        nama_stan: nama_stan || findStan?.nama_stan,
        nama_pemilik: nama_pemilik || findStan?.nama_pemilik,
        telepon: telepon || findStan?.telepon,
      },
      where: { id: Number(id) },
    });

    res.status(200).json({
      status: "success",
      message: `Data stan ${findStan?.nama_stan} berhasil diupdate`,
      data: updateStan,
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
