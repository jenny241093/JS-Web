const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app) => {
    // view engine and static files

    app.use(express.static(path.resolve(__basedir, 'static')));
    app.engine('.hbs', handlebars({ extname: '.hbs' }))
    app.set('views', path.resolve(__basedir, 'views'));
    // body parser
    app.use(bodyParser.urlencoded({ extended: false }));

};