
import Corredor from "./DAO/corredores.model.js"
class Factory {
    static getCorredor() {
        return new Corredor();
    }
}

export default Factory;
