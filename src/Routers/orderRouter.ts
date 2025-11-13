import express from "express";
import { verifyRole, verifyToken } from "../Middlewares/authorization";
import {
  createOrder,
  deleteOrder,
  getSiswaHistory,
  getStanHistory,
  updateStatus,
} from "../Controllers/orderController";
import {
  verifyCreateOrder,
  verifyUpdateStatus,
} from "../Middlewares/orderValidation";

const app = express();
app.use(express.json());

app.get(
  "/history/siswa",
  [verifyToken, verifyRole(["SISWA"])],
  getSiswaHistory
);
app.get(
  "/history/stan",
  [verifyToken, verifyRole(["ADMIN_STAN"])],
  getStanHistory
);
app.post(
  "/create",
  [verifyToken, verifyRole(["SISWA"]), verifyCreateOrder],
  createOrder
);
app.put(
  "/update/:id",
  [verifyToken, verifyRole(["ADMIN_STAN"]), verifyUpdateStatus],
  updateStatus
);
app.delete("/delete/:id", [verifyToken, verifyRole(["SISWA"])], deleteOrder);

export default app;
