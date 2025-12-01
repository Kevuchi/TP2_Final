import express from "express";
import CorredoresController from "../controllers/corredores.controller.js";
/*import { validarToken, autorizarRoles } from "../middlewares/jwt.middleware.js";
import { validate } from "../middlewares/validate.js";
import schemaUsuario from "../middlewares/validationUsuario.js";
*/
class Router {
    constructor() {
        this.corredores = new CorredoresController();
        this.router = express.Router();
    }
    startRoutes() {
        this.router.get(
            "/corredores",
            //            validarToken,
            //            autorizarRoles("ADMIN"),
            this.corredores.getCorredores
        );

        this.router.post(
            "/corredores",
            //    validarToken,
            //          autorizarRoles("ADMIN"),
            //          validate(schemaUsuario),
            this.corredores.postCorredor
        );

        return this.router;
    }
}

export default Router;
