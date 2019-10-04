const fs = require('fs');
class CubeModel {

    constructor() {
        this.data = require('../config/database');
    }
    insert(newCube) {

        const newIndex = this.data.lastIndex++;
        const newData = {
            lastIndex: newIndex,
            entities: this.data.entities.concat({ id: newIndex, ...newCube })
        };
        return new Promise((resolve, reject) => {
            fs.writeFile()
        });
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