import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { SECRET } from "../global";

interface JwtPayload {
  id: number;
  username: string;
  password: string;
  role: string;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(403).json({
      message: `Akses ditolak, Tidak ada token yang disediakan!`,
    });
    return;
  }

  try {
    const secretKey = SECRET || "";
    const decoded = verify(token, secretKey);
    (req as any).users = decoded as JwtPayload;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: false,
      message: `Token tidak valid!`,
    });
  }
};

export const verifyRole = (allowedRole: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).users;

    if (!user) {
      res
        .status(403)
        .json({ message: `Tidak ada informasi pengguna yang tersedia!` });
      return;
    }

    if (!allowedRole.includes(user.role)) {
      res.status(403).json({
        message: `Akses ditolak, membutuhkan salah satu role : ${allowedRole.join(
          " "
        )}`,
      });
    }
    next();
  };
};
