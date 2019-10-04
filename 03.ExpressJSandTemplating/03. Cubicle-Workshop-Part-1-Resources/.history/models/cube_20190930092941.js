const fs = require('fs');
const path = require('path');
class CubeModel {

    constructor() {
        this.data = require('../config/database');
    }
    _write(newData, resolveData) {

        return new Promise((resolve, reject) => {
            fs.writeFile(path.resolve('../config/database.json'), JSON.stringify(newData), (err) => {
                if (err) {

                    reject(err);
                    return;
                }
                this.data = newData;
                resolve(resolveData);
            });
        });
    }
    insert(newCube) {

        const newIndex = this.data.lastIndex++;
        newCube = { id: newIndex, ...newCube };
        const newData = {
            lastIndex: newIndex,
            entities: this.data.entities.concat(newCube)
        };
        return this._write(newData, newCube);
    }
    update(cubeId, updates) {
        const entityIndex = this.data.entities.findIndex(({ id }) => id === cubeId);
        const entity = this.data.entities[entityIndex];
        const updatedEntity = {...entity, ...updates };

        const newData = {
            lastIndex: this.data.lastIndex,
            entities: [
                ...this.data.entities.slice(0, entityIndex),
                updatedEntity,
                ...this.data.entities.slice(entityIndex + 1)
            ]
        };
        return this._write(newData, updatedEntity);
    }
    delete() {

    }
    getOne() {

    }
    getAll() {

    }
}
module.exports = new CubeModel();