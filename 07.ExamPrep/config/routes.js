const routers = require('../routers');

module.exports = (app) => {

    app.use('/', routers.home);

    app.use('/home', routers.home);

    app.use('/user', routers.user);

    app.use('/expense', routers.expense);

    app.get('*', (req, res) => { res.render('404.hbs'); });
};