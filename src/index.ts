import express from "express";
import cors from "cors";

import { PORT } from "./global";

import menuRouter from "./Routers/menuRouter";
import userRouter from "./Routers/userRouter";
import diskonRouter from "./Routers/diskonRouter";

const app = express();
app.use(cors());

app.use("/user", userRouter);
app.use("/menu", menuRouter);
app.use("/diskon", diskonRouter);

app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}`);
});
