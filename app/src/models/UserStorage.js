"user strict";
const { reject } = require("async");
// class 안에 변수를 선언할 때는 cons와 같은 선언자가 필요하지 않다.
// 데이터의 은닉화,   getUsers라는 새로운 메서드로 users 데이터를 전달해주어야 한다.\
// privat한 메서드는 항상 최상단으로 올릴것. (컨벤션)

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id,name, psword) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}
module.exports = UserStorage;
