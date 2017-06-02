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
require('./routes/apiRoutes')(router, db);
require('./routes/spaRoutes')(router, db);

//server init and middleware config
const app = express();
app.use('/', router);
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));
