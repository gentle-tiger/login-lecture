"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views"); // 화면을 관리해줄 폴더

app.set("view engine", "ejs"); //ejs 가 뭔지 확인하기 . !!!
// login.js를 실행시키기 위한 미들웨어 생성
// __dirname 은 현재 app.js 파일이 위치를 반환한다. 위치 안에 있는 /src/pulice 를 정적 경로로 추가해 준다는 이야기다.
// 그렇게 되면 login.ejs에서 스크립트 파일을 불러올 때 js public 안에 있는 js 안에 있는 ... 이렇게 해서 경로의 파일을 불러오게 된다.
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한굴, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // ues -> 미들웨어를 등록하는 메서드임.

module.exports = app;
