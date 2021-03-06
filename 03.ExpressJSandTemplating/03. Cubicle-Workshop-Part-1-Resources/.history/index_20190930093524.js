const env = process.env.NODE_ENV || 'development';
global.__basedir = __dirname;
const cubeModel = require('./models/cube');
cubeModel.insert({ name: 'Test1', desc: 'test1' }).then(insertedCube => {
    console.log(insertedCube);

})

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));