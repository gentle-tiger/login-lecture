"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const logger = require("./src/config/logger");
// const morgan = require("morgan"); // winston 은 사용하고,  morgan 은 사용하지 않겠음.
dotenv.config();

const app = express();

const accessLogStream = require("./src/config/log");

// 라우팅
const home = require("./src/routes/home");

// logger.info("info", "hello 구독자님들."); // logging 중 하나가 info 이다.
// logger.error("Hello 구독자님들.");

// 앱 세팅
app.set("views", "./src/views"); // 화면을 관리해줄 폴더
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("tiny", { stream: accessLogStream })); // 미들웨어 / dev 는 다양하게 넣을 수 있음.
app.use("/", home); // ues -> 미들웨어를 등록하는 메서드임.

module.exports = app;
