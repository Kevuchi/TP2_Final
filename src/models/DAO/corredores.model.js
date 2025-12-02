import funcionAlerta from "../../utils/calcDistancia.js"
class Corredor {
    constructor() {
        this.corredores = [
            { id: "COR234", latitud: -44.6037, longitud: -68.3816 },
            { id: "COR567", latitud: -99.6037, longitud: -20.3816 }
        ];
    }

    getCorredores = async () => {
        const todosCorredores = await this.corredores;
        return todosCorredores;
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
        if (findCorredor != null || findCorredor != undefined) { this.corredores.push(corredor) }
        else {
            this.corredores.filter(corr => corr.id != corredor.id)
            this.corredores.push(corredor)
        }
        let alerta = this.corredores.filter(c => funcionAlerta(corredor.latitud, corredor.longitud, c.latitud, c.longitud) < 50)

        return alerta;
    };
}

export default Corredor;
