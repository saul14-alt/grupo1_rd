import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import userRouter from "./routes/userRouter.js"
import ProductRouter from "./routes/productRoute.js";



dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", userRouter)
app.use("/api", ProductRouter)


app.get("/", (req, res) => {
  res.send("¡Servidor corriendo con éxito y DB conectada!");
});

app.listen(port, () => {
  console.log(`Servidor escuchandooo en http://localhost:${port}`);
});
