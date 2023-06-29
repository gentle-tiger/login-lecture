"user strict";
// class 안에 변수를 선언할 때는 cons와 같은 선언자가 필요하지 않다.
// 데이터의 은닉화,   getUsers라는 새로운 메서드로 users 데이터를 전달해주어야 한다.\
// privat한 메서드는 항상 최상단으로 올릴것. (컨벤션)

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs.readFile("./src/databases/users.json").then((data) => {
      return this.#getUserInfo(data, id).catch(console.error);
    });
  }

  static save(userInfo) {
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}
module.exports = UserStorage;
