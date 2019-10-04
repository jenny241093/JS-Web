class CubeModel {

    constructor() {
        this.data = require('../config/database');
    }
    insert(newCube) {

        const newIndex = this.data.lastIndex++;
        const newData = {
            lastIndex: newIndex;
            entities: this.data.entities.concat({ id: newIndex, ...newCube })

        };
    }
    update() {

    }
    delete() {

    }
    getOne() {

    }
    getAll() {

    }
}
module.exports = new CubeModel();