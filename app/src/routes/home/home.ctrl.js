"use strict";
// 이 함수들은 단순히 해당 페이지를 렌더링 해주는 함수이다.

// home.ctrl.js 파일은 정의해 놓ㅇ느 객체를 내보내는 모듈로, 해당 모듈을 렌더링하는 함수들과 로그인 처리를 수행하는 함수를 정의한다.
const UserStorage = require("../../models/UserStorage"); /// 상위 상위 폴더의 모델 폴더 ...
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
    const id = req.body.id,
      psword = req.body.psword;
    // class 자체에서 바로 접근하기 위해서는 UserStorage에  static을 붙여서 정적 변수로 만들어 주어야 한다.
    // 그런데,! 실제 상용화되는 곳에서는 이러한 식으로 바로 접근할 수 없어야 한다. 그래서 은닉화가 필요하다.
    const users = UserStorage.getUsers("id", "psword"); //

    const response = {};
    if (user.id.includes(id)) {
      const idx = user.id.indexOf(id);
      if (user.psword[idx] === psword) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하였습니다.";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
