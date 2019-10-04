const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {

    app.use(express.static(__dirname + '/static'));
    app.engine('.hbs', handlebars({ extname: '.hbs' }))
    app.set('views', __dirname + '/views');
    //TODO: Setup the view engine

    //TODO: Setup the body parser

    //TODO: Setup the static files

};