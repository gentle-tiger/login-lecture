"use strict";

const express = require("express");
const router = express.Router(); // 이 파일에서도 express를 사용할 수 있도록 함.

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;
