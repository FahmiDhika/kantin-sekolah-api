import express from "express";
import cors from "cors";

import { PORT } from "./global";

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}`);
});
