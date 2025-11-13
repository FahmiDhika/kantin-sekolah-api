import express from "express";
import { verifyRole, verifyToken } from "../Middlewares/authorization";
import {
  createDiskon,
  deleteDiskon,
  getActiveDiskon,
  getAllDiskon,
  getDiskonByStan,
  lepasDiskon,
  pasangDiskon,
  updateDiskon,
} from "../Controllers/diskonController";
import {
  verifyCreateDiskon,
  verifyUpdateDiskon,
} from "../Middlewares/diskonValidation";

const app = express();
app.use(express.json());

app.get("/stan/:id", [verifyToken, verifyRole(["SISWA"])], getDiskonByStan);
app.get("/all", [verifyToken, verifyRole(["ADMIN_STAN"])], getAllDiskon);
app.get("/active", [verifyToken, verifyRole(["ADMIN_STAN"])], getActiveDiskon);
app.post(
  "/create",
  [verifyToken, verifyRole(["ADMIN_STAN"]), verifyCreateDiskon],
  createDiskon
);
app.put(
  "/update/:id",
  [verifyToken, verifyRole(["ADMIN_STAN"]), verifyUpdateDiskon],
  updateDiskon
);
app.delete(
  "/delete/:id",
  [verifyToken, verifyRole(["ADMIN_STAN"])],
  deleteDiskon
);
app.post(
  "/pasang",
  [verifyToken, verifyRole(["ADMIN_STAN"])],
  pasangDiskon
);
app.delete(
  "/lepas",
  [verifyToken, verifyRole(["ADMIN_STAN"])],
  lepasDiskon
);

export default app;
