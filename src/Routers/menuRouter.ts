import express from "express";
import { getAllMenus } from "../Controllers/menuController";

const app = express();
app.use(express.json());

app.get("/get", getAllMenus);

export default app;
