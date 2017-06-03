//server dependencies and constants
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Promise = require("bluebird");

const PORT = process.env.PORT || 8080;

//models and ODM
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact");

var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//router config
const router = express.Router();
require('./routes/apiRoutes')(router);
require('./routes/spaRoutes')(router, __dirname);

//server init and middleware config
const app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use('/', router);

app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));
