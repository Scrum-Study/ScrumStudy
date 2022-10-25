//interfaces.ts 트랜스 컴파일한 js 파일
"use strict";
const minho = {
  nickname: "minho",
  healthBar: 10,
  team: "pink",
};
const minji = {
  nickname: "minji",
  healthBar: 10,
  team: "yellow",
};
// 축적된 lastName과 age 속성 추가해야 오류 안남
const nico = {
  name: "nico",
};
nico.age = 10;
nico.lastName = "las";
nico.name = "vegas";
class PlayerInfo {
  constructor(
    // interface를 상속하는 경우 속성은 public만 가능
    firstName,
    lastName,
    middleName,
    health
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.health = health;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name) {
    return `${name} hi~!`;
  }
}
// interface를 타입처럼 사용할 수 있다.
function makeUser(user) {
  return `${user.firstName} 유저가 생성되었습니다.`;
}
const madeUser = makeUser({
  firstName: "yechan",
  lastName: "kim",
  middleName: "louie",
  sayHi: (name) => "hi",
  fullName: () => "xx",
});
console.log(madeUser);
