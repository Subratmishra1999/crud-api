const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//Database Connection
require('./config/database');

// define a simple route
var routers = require('./Router/router');
app.use('/', routers);

// listen for requests
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});