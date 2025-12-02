import express from "express";
import dotenv from "dotenv";
import RouterCorredores from "./routes/corredores.routes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", new RouterCorredores().startRoutes());
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
