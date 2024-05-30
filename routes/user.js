"use strict";

var express = require("express");

// Middleware
var _require = require("../middlewares/Auth"),
  AuthBasic = _require.AuthBasic;

// Controllers
var _require2 = require("../controllers/Users"),
  Login = _require2.Login,
  ForgotPassword = _require2.ForgotPassword,
  ResetPassword = _require2.ResetPassword;
var router = express.Router();

//Routes

// User
router.post("/login", AuthBasic, Login);
router.post("/forgot-password", AuthBasic, ForgotPassword);
router.post("/reset-password", ResetPassword);
module.exports = router;