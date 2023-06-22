"use strict";

// index.js 파일은 경로에 대한 요청을 처리하기 위해 라우팅을 설정하고 해당 요청이 들어왔을 때 실행되는 컨트롤럴 함수를 자정하는 역할을 한다.

// Express.js 모듈을 가져와서 기능을 사용할 수 있게 해준다.
const express = require("express");

// express의 Router 객체를 생성한다. Router 객체는 URL 경로와 관련된 미들웨어 및 핸들러를 그룹화하고 구성할 수 있도록 도와준다.
const router = express.Router();

// "./home.ctrl" 파일에서 정의돤 객체를 가져온다. 이 객체는 라우팅 처리에 사용될 컨트롤러 함수들을 포함하고 있다.
const ctrl = require("./home.ctrl");

// 라우트 핸들러
// 경로로 GET 요청이 들어오면, 다음 인자로 오는 함수를 실행하고 처리하는 라우트 핸들러이다.
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login); // 로그인 기능을 초리해주기 때문에 process 라고 해주겠다.

module.exports = router;
