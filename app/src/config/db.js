const mysql = require("mysql");
// mysql 을 불러오기 전에 터미널로 해당 프로젝트 폴더 안에서 npm i -s mysql로 mysql을 설치해준다.

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();

module.exports = db;
