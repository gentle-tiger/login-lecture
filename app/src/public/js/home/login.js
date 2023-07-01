"use strict";

// DOM -> Document Object Model 을 통해 제어한다.
// 여기는 프론트엔드와 연결되어 있는 JavaScritp 파일이다.

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
  if (!id.value) {
    return alert("아아디를 입력해주세요.");
  }
  if (!psword.value) {
    return alert("비밀번호를 입력해주세요.");
  }
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req), // 그냥 req 와는 다름. 문자열로 감싸져서 나옴. 이런 상태로 서버로 전송함.
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인중 에러 발생 ");
    });
}
