"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");
require("dotenv").config();
var _require = require("uuid"),
  uuidv4 = _require.v4;
var app = express();
var router = require("./routes/index");
var sentry = require("./services/sentry");
sentry(process.env.SENTRY_DSN);
var PORT = process.env.PORT || 5000;
app.use(cors());
var requestIdMiddleware = function requestIdMiddleware(req, res, next) {
  req.id = uuidv4();
  next();
};
app.use(requestIdMiddleware);
app.use(bodyParser.json({
  limit: "50mb"
}));
app.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: true
}));
app.use("/", router);
app.listen(PORT, function () {
  return console.log("Server Running on PORT ".concat(PORT));
});