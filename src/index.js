import express from "express";
import dotenv from "dotenv";
import RouterCorredores from "./routes/corredores.routes.js"
/*import MongoConnection from "./models/connections/mongodb.js";
import RouterAuth from "./routes/auth.routes.js";*/

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*MongoConnection.connection()
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => {
        console.error("Error conectando a MongoDB:", err);
        process.exit(1);
    });
*/
//app.use("/api", new RouterAuth().startRoutes());
app.use("/api", new RouterCorredores().startRoutes());
app.use((req, res) => {
    res.status(404).json({
        code: 404,
        message: "No encontrado"
    });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
