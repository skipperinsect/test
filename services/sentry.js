"use strict";

var Sentry = require("@sentry/node");
var _require = require("@sentry/profiling-node"),
  nodeProfilingIntegration = _require.nodeProfilingIntegration;
module.exports = function (dsn) {
  Sentry.init({
    dsn: dsn,
    integrations: [nodeProfilingIntegration()],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0
  });
};