const models = require('../models');
const config = require('../config/config');
const { validationResult } = require('express-validator');

module.exports = {
    get: {
        create: (req, res, next) => {

            const hbsObject = {
                pageTitle: 'Home Page',
                isLoggedIn: req.cookies[config.cookie] !== undefined,
                username: req.user.username

            };
            res.render('createExpensePage.hbs', hbsObject);
        }
    },

    post: {
        create: (req, res, next) => {
            console.log(req.user);

            const { merchant, total, category, description, report, user } = req.body;
            const date = new Date();
            const isChecked = report === 'on';

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.render('createExpensePage.hbs', {
                    message: errors.array()[0].msg,
                    oldInput: req.body
                })
            }

            models.Expense.create({ merchant, date, total, isPublic: isChecked, category, description, user: req.user.id }).then((createdExpense) => {
                res.redirect('/home/');
            })
        }
    }
};