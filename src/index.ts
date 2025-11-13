import express from "express";
import cors from "cors";

import { PORT } from "./global";

import menuRouter from "./Routers/menuRouter";
import userRouter from "./Routers/userRouter";
import diskonRouter from "./Routers/diskonRouter";
import orderRouter from "./Routers/orderRouter";

const app = express();
app.use(cors());

app.use("/user", userRouter);
app.use("/menu", menuRouter);
app.use("/diskon", diskonRouter);
app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Welcome to Kantin Sekolah API" });
  return;
});
