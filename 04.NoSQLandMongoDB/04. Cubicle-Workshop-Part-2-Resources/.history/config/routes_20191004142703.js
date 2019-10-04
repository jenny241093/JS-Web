// TODO: Require Controllers...
const cubeController = require('../controllers/cube');
const accessoryController = require('../controllers/accessory');

module.exports = (app) => {
    app.get('/details/:id', cubeController.details)
    app.get('/about', cubeController.about);
    app.get('/not-found', cubeController.notFound);
    app.get('/create', cubeController.getCreate);
    app.post('/create', cubeController.postCreate);
    app.get('/', cubeController.index);
    app.get('/create/accessory', accessoryController.getCreate);
    app.post('/create/accessory', accessoryController.create);
    app.get('/attach/accessory', accessoryController.getAttach);
    app.post('/attach/accessory/:id', accessoryController.attach);

};