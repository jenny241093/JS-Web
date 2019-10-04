const fs = require('fs');
const path = require('path');
class CubeModel {

    constructor() {
        this.data = require('../config/database');
    }
    insert(newCube) {

        const newIndex = this.data.lastIndex++;
        newCube = { id: newIndex, ...newCube };
        const newData = {
            lastIndex: newIndex,
            entities: this.data.entities.concat(newCube);
        };
        return new Promise((resolve, reject) => {
            fs.writeFile(path.resolve('../config/database.json'), JSON.stringify(newData), (err) => {
                if (err) {

                    reject(err);
                    return;
                }
                this.data = newData;
                resolve(newCube);
            });
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