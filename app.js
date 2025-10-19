// app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/auth/login/login.html"));
});

app.listen(3000, () => console.log("✅ Server running at http://localhost:3000/login"));
