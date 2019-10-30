const config = require('../config/config');
const models = require('../models');

module.exports = {
    get: {
        home: (req, res, next) => {

            models.Expense.find().then((expenses) => {

                const hbsObject = {
                    pageTitle: 'Home Page',
                    isLoggedIn: req.cookies[config.cookie] !== undefined,
                    username: req.user.username,
                    expenses
                };

                res.render('homePage.hbs', hbsObject);
            })

        }
    },
};