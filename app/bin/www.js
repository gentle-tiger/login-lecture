"use strict";

const app = require("../app");

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log("서버 가동");
});
