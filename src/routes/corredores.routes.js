import express from "express";
import CorredoresController from "../controllers/corredores.controller.js";

class Router {
    constructor() {
        this.corredores = new CorredoresController();
        this.router = express.Router();
    }
    startRoutes() {
        this.router.get(
            "/corredores",
            this.corredores.getCorredores
        );

        this.router.post(
            "/corredores",
            this.corredores.postCorredor
        );

        return this.router;
    }
}

export default Router;
