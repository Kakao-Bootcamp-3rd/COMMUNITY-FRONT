import express from "express";
import path from "path";
import { rootDir } from "./utils/path.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.static(path.join(rootDir, "public")));
app.use("/", authRoutes);
app.use("/", postRoutes);
app.use("/", userRoutes);

app.listen(3000);