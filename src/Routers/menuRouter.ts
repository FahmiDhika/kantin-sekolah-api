import express from "express";
import {
  addMenu,
  deleteMenu,
  getAllMenus,
  getAllMenusForSiswa,
  updateMenu,
} from "../Controllers/menuController";
import { verifyRole, verifyToken } from "../Middlewares/authorization";
import { verifyAddMenu, verifyUpdateMenu } from "../Middlewares/menuValidation";
import uploadFile from "../Middlewares/menuUpload";

const app = express();
app.use(express.json());

app.get(
  "/getKantin",
  [verifyToken, verifyRole(["SISWA"])],
  getAllMenusForSiswa
);
app.get("/get", [verifyToken, verifyRole(["ADMIN_STAN"])], getAllMenus);
app.post(
  "/add",
  [
    verifyToken,
    verifyRole(["ADMIN_STAN"]),
    uploadFile.single("foto"),
    verifyAddMenu,
  ],
  addMenu
);
app.put(
  "/update/:id",
  [
    verifyToken,
    verifyRole(["ADMIN_STAN"]),
    uploadFile.single("foto"),
    verifyUpdateMenu,
  ],
  updateMenu
);
app.delete(
  "/delete/:id",
  [verifyToken, verifyRole(["ADMIN_STAN"])],
  deleteMenu
);

export default app;
