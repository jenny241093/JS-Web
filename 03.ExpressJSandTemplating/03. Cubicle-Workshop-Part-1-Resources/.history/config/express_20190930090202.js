const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app) => {

    app.use(express.static(path.resolve(__basedir + '..static')));
    app.engine('.hbs', handlebars({ extname: '.hbs' }))
    app.set('views', __basedir + '/views');
    //TODO: Setup the view engine

    //TODO: Setup the body parser

    //TODO: Setup the static files

};