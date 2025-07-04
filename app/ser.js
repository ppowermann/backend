const express = require('express')
const app = express();
const path = require('path')

const home = require('./src/routes');

app.set("views", path.join(__dirname, 'src', 'views'));
app.set("view engine", "ejs")

app.use('/', home);
app.use(express.static(path.join(__dirname, 'src', 'public')));


module.exports = app;