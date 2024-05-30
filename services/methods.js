"use strict";

var Sentry = require("@sentry/node");
var ResponseSuccess = function ResponseSuccess(req, res, data, message) {
  var status = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 200;
  return res.status(status).json({
    request_id: req.id,
    data: data,
    message: message
  });
};
var ResponseFailed = function ResponseFailed(req, res, error, message) {
  var status = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 400;
  console.log("Request ID : ".concat(req.id));
  console.log("".concat(req.method, " ").concat(req.originalUrl, " : ").concat(error ? error.message : message));
  if (error) {
    Sentry.captureException(error);
  }
  return res.status(status).json({
    request_id: req.id,
    data: null,
    err_message: message
  });
};
module.exports = {
  ResponseSuccess: ResponseSuccess,
  ResponseFailed: ResponseFailed
};