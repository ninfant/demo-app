import express from "express";
import dotenv from "dotenv";
import demoRoutes from "./routes/demoRoutes.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

// Estas dos líneas para que __dirname funcione con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// va a permitir todas las peticiones desde cualquier origen (solo recomendable en desarrollo)
app.use(cors());

// Middleware para JSON
app.use(express.json());

app.use("/api", demoRoutes);

app.get("/", (req, res) => {
  res.send("Demo MS2 Service is live");
});

// Servir los archivos estáticos del frontend
// Servir React desde ./client/dist
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`MS2 running at http://localhost:${PORT}`);
});
