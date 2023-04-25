const express = require('express');
const app = express();
const ejs = require('ejs');
const firstRoute = require('./routes/firstRoute.js')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.use('/', firstRoute);

module.exports = app;