"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

module.exports = {
  home,
  login,
};

// object 로 빼준다. 이때  key 값만 넣어주게 되면 자동적으로 key와 같은 value를 넣어준다.
// {
//   hello : hello,
//   login : login,
// };
