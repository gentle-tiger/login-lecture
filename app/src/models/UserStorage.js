"user strict";
// class 안에 변수를 선언할 때는 cons와 같은 선언자가 필요하지 않다.
// 데이터의 은닉화,   getUsers라는 새로운 메서드로 users 데이터를 전달해주어야 한다.
class UserStorage {
  static #users = {
    id: ["hojin1234", "이친구", "저친구"], // 이게 하나의 필드인 거임.
    psword: ["1234", "1234", "123456"],
    name: ["최호진", "이친구", "저친구"],
  };

  static getUsers(...fields) {
    // ...fields에 들어오는 파라미터는 이 UserStorage.getUsers 를 사용하는 곳에 적혀있다.
    const users = this.#users; // 일반적인 참조 복사
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {}); // 이거 잘 이해해보자.
    return newUsers;
  }

  // User.js에서 던져주는 유저의 id 값을 아이디에 해당하는 데이터를 object로 전달하는 메서드를 만든다.
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // users를 받아와서 이 users의 키 값들만 리스트로 만든다. =>[id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx]; // users의 키값의 idx를 구한다. 는 id값이다.
      return newUser;
    }, {});
    return userInfo;
  }
}
module.exports = UserStorage;
