"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views"); // 화면을 관리해줄 폴더
app.set("view engine", "ejs"); //ejs 가 뭔지 확인하기 . !!!

app.use("/", home); // ues -> 미들웨어를 등록하는 메서드임.

module.exports = app;
