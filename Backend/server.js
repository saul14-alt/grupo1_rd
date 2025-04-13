import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import userRouter from "./routes"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/")

app.get("/", (req, res) => {
  res.send("¡Servidor corriendo con éxito y DB conectada!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
