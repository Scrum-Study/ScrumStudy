//class.ts 트랜스 컴파일한 js 파일
"use strict";
// 추상 클래스 --> 자바스크립트에는 없고 타입 스크립트에서 제공하는 기능
// 인스턴스 생성은 불가하고 상속하는 클래스가 가져야 할 속성과 메서드를 명시하여 사용할 수 있게 한다.
class User {
  constructor(
    //private은 인스턴스 밖에서 접근할 수 없고 다른 자식 클래스에서도 접근 불가
    firstName,
    lastName,
    nickname
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Name extends User {
  getNickName() {
    console.log(this.nickname);
  }
  getFirstName() {
    console.log(this.firstName);
  }
}
const user = new User("yechan", "kim", "chan");
const player = new Player("yechan", "kim", "chan");
player.firstName;
player.lastName;
player.getFullName();
class Dict {
  //수동 초기화
  constructor() {
    this.words = {};
  }
  //클래스를 타입으로 사용할 수 있음
  add(word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term) {
    return this.words[term];
  }
  static hello() {
    return " hello";
  }
}
class Word {
  constructor(term, def) {
    this.term = term;
    this.def = def;
  }
}
const kimchi = new Word("kimchi", "한국 음식");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
kimchi.term = "김치";
kimchi.def = "맛있어요";
//static method -> 인스턴스 생성 안해도 쓸 수 있는 메소드
Dict.hello();
