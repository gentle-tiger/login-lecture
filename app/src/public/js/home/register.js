"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
function register() {
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req), // 그냥 req 와는 다름. 문자열로 감싸져서 나옴. 이런 상태로 서버로 전송함.
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생 ");
    });
}
