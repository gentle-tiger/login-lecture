"user strict";

const UserStorage = require("./UserStorage");
class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);

      if (user) {
        if (user.id === client.id && user.psword === client.psword) {
          return { success: true }; // 둘 다 같을 때
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
      return { success: false, msg: "존재하지 않는 아이디입니다." };
    } catch (err) {
      return { seccess: false, err };
    }
  }

  async register() {
    const client = this.body;

    try {
      const res = await UserStorage.save(client);
      return res;
    } catch (err) {
      return { success: false, err };
    }
  }
}
module.exports = User;
