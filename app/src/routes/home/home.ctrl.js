"use strict";
const User = require("../../models/User");
// 이 함수들은 단순히 해당 페이지를 렌더링 해주는 함수이다.

// home.ctrl.js 파일은 정의해 놓ㅇ느 객체를 내보내는 모듈로, 해당 모듈을 렌더링하는 함수들과 로그인 처리를 수행하는 함수를 정의한다.
const output = {
  // home 함수는 res.render("home/index")를 호출하여 "home/index"라는 템플릿을 렌더링합니다.
  home: (req, res) => {
    res.render("home/index");
  },
  // login 함수는 res.render("home/login")를 호출하여 "home/login"이라는 템플릿을 렌더링합니다.
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    // User가 기본적으로  가지고 있도록 한다. User라는 클래스를  req.body를 넣어서 인스턴스화 한다.
    // user는 body를 항상 들고 다니게 된다.
    const user = new User(req.body);
    const response = user.login();
    console.log(response);
    // return res.json(response); //json의 형태로 가져온다
  },
};

module.exports = {
  output,
  process,
};
