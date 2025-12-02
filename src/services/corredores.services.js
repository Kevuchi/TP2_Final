import Factory from "../models/Factory.js";

class CorredoresService {
    constructor() {
        this.corredores = Factory.getCorredor();
    }

    getCorredores = async () => {
        return this.corredores.getCorredores();
    };

    postCorredores = async (corredor) => {
        const data = { ...corredor };
        return this.corredores.postCorredor(data);
    };
}

export default CorredoresService;
