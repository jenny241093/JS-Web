const accessoryModel = require('../models/accessory');

function attach(req, res) {
    const { name = null, description = null, imageUrl = null, difficultyLevel = null } = req.body;
    // const newCube = cubeModel.create(name, description, imageUrl, difficultyLevel);
    accessoryModel.attach({ name, description, imageUrl, difficultyLevel }).then(accessory => {
        console.log(accessory);
        res.redirect('/');
    });
}

function create(req, res) {
    const { name = null, description = null, imageUrl = null, difficultyLevel = null } = req.body;
    // const newCube = cubeModel.create(name, description, imageUrl, difficultyLevel);
    accessoryModel.create({ name, description, imageUrl, difficultyLevel }).then(accessory => {
        console.log(accessory);
        res.redirect('/');
    });
}

function getCreate(req, res) {
    res.render('createAccessory.hbs');
}

function getAttach(req, res) {
    res.render('attachAccessory.hbs');
}

module.exports = {
    attach,
    create,
    getCreate
};