import express from "express";
import {
  getUser,
  register,
  dataSiswa,
  dataStan,
  authentication,
  updateStan,
  updateUser,
  updateSiswa,
  deleteUser,
} from "../Controllers/userController";
import {
  verifyAuthentication,
  verifyDataSiswa,
  verifyDataStan,
  verifyRegister,
  verifyUpdateDataSiswa,
  verifyUpdateDataStan,
  verifyUpdateUser,
} from "../Middlewares/userValidation";
import { verifyToken, verifyRole } from "../Middlewares/authorization";
import uploadFile from "../Middlewares/userUpload.ts";

const app = express();
app.use(express.json());

// end point general
app.post("/register", verifyRegister, register);
app.post("/login", verifyAuthentication, authentication);
app.put(
  "/update/:id",
  [verifyToken, verifyRole(["ADMIN_STAN", "SISWA"]), verifyUpdateUser],
  updateUser
);
app.delete(
  "/delete/:id",
  [verifyToken, verifyRole(["ADMIN_STAN", "SISWA"])],
  deleteUser
);

// end point siswa
app.post(
  "/dataSiswa/:id",
  [
    verifyToken,
    verifyRole(["SISWA"]),
    uploadFile.single("foto"),
    verifyDataSiswa,
  ],
  dataSiswa
);
app.put(
  "/updateSiswa/:id",
  [
    verifyToken,
    verifyRole(["SISWA"]),
    uploadFile.single("foto"),
    verifyUpdateDataSiswa,
  ],
  updateSiswa
);

// end point admin stan
app.get("/get", [verifyToken, verifyRole(["ADMIN_STAN"])], getUser);
app.post(
  "/dataStan/:id",
  [verifyToken, verifyRole(["ADMIN_STAN"]), verifyDataStan],
  dataStan
);
app.put(
  "/updateStan/:id",
  [verifyToken, verifyRole(["ADMIN_STAN"]), verifyUpdateDataStan],
  updateStan
);

export default app;
