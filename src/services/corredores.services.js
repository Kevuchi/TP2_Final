import Factory from "../models/Factory.js";
//import bcrypt from "bcryptjs";

class CorredoresService {
    constructor() {
        this.corredores = Factory.getCorredor();
    }

    getCorredores = async () => {
        return this.corredores.getCorredor();
    };

    postUsuarios = async (corredor) => {
        const data = { ...corredor };
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        return this.corredores.postCorredor(data);
    };
}

export default CorredoresService;
