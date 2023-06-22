"use script";

// DOM -> Document Object Model 을 통해 제어한다.

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");
console.log(id, psword, loginBtn);

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  console.log(req);
}
