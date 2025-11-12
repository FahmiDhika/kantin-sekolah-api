import dotenv from "dotenv";
import path from "path";
dotenv.config();

export const BASE_URL = `${path.join(__dirname, "../")}`;
export const PORT = process.env.PORT;
export const SECRET = process.env.SECRET;
