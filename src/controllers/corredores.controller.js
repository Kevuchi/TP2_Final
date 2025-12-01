import CorredoresService from "../services/corredores.services.js";

class CorredoresController {
    constructor() {
        this.corredores = new CorredoresService();
    }

    getCorredores = async (req, res) => {
        const all = await this.corredores.getCorredores();
        res.send(all);
    };

    postCorredor = async (req, res) => {
        try {
            const corredor = req.body;
            const nuevo = await this.corredores.postCorredores(corredor);
            res.status(201).send(nuevo);
        } catch (error) {
            res.status(400).json({ errorMsg: error.message });
        }
    };
}

export default CorredoresController;
