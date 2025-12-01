class Corredor {
    constructor() {
        const corredores = [];
    }

    getCorredores = async () => {
        return await this.corredores;
    };

    getCorredorById = async (id) => {
        if (id == null || typeof id != "string") throw new Error("Id inválido");
        let corredorRetornar = null;
        corredorRetornar = this.corredores.filter(corr => corr.id == id);
        return corredorRetornar;
    };

    postCorredor = async (corredor) => {
        if (!corredor ||
            !corredor.id ||
            !corredor.latitud ||
            !corredor.longitud ||
            typeof corredor.latitud != "number"
            || typeof corredor.longitud != "number"
            || corredor.id.length > 6
            || corredor.id.length < 6) throw new Error("Corredor inválido")
        const findCorredor = this.getCorredorById(corredor.id);
        if (findCorredor != null) { this.corredores.push(corredor) }
        else {
            this.corredores.filter(corr => corr.id != corredor.id)
            this.corredores.push(corredor)
        }

        return { _id: result.insertedId, ...usuario };
    };
}

export default Corredor;
