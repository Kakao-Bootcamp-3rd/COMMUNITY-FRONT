import express from "express";
import path from "path";
import { rootDir } from "./utils/path.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(express.static(path.join(rootDir, "public")));
app.use("/", authRoutes);
app.use("/", postRoutes);

app.listen(3000);