"user strict";
// class 안에 변수를 선언할 때는 cons와 같은 선언자가 필요하지 않다.
// 데이터의 은닉화,   getUsers라는 새로운 메서드로 users 데이터를 전달해주어야 한다.
class UserStorage {
  static #users = {
    // #을 붙여서 private 변수로 저장해야한다. 일단
    id: ["hojin0101", "이친구", "저친구"],
    psword: ["1234", "1234", "123456"],
    name: ["최호진", "이친구", "저친구"],
  };

  static getUsers(...fields) {
    // ...fields에 들어오는 파라미터는 이 UserStorage.getUsers 를 사용하는 곳에 적혀있다.
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {}); // 이거 잘 이해해보자.
    return newUsers;
  }
}
module.exports = UserStorage;
