// 타입이 특정 값을 가지도록 제한
type Team = "red" | "blue" | "yellow";

type Profile = {
  nickname: string;
  healthBar: number;
  team: Team;
};

// object 모양을 정해주는 기능 , 추상 클래스 대체하여 사용
// Person interface는 Profile type과 동일한 객체 모양을 지정한다.
interface Person {
  nickname: string;
  healthBar: number;
  team: Team;
}

const minho: Profile = {
  nickname: "minho",
  healthBar: 10,
  team: "pink",
};

const minji: Person = {
  nickname: "minji",
  healthBar: 10,
  team: "yellow",
};

interface User {
  readonly name: string;
}

// interface는 type과 달리 여러 번 선언하여 property 축적 가능
interface User {
  lastName: string;
}

interface User {
  age: number;
}

interface character extends User {}

// 축적된 lastName과 age 속성 추가해야 오류 안남
const nico: character = {
  name: "nico",
};
nico.age = 10;
nico.lastName = "las";
nico.name = "vegas";

//class에서 interface를 구현할 경우
// interface는 javascript 코드로 컴파일 되지 않는다. -> 파일 크기 줄일 수 있다.
interface UserInfo {
  firstName: string;
  lastName: string;
  middleName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}

class PlayerInfo implements UserInfo, Human {
  constructor(
    // interface를 상속하는 경우 속성은 public만 가능
    public firstName: string,
    public lastName: string,
    private middleName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `${name} hi~!`;
  }
}

// interface를 타입처럼 사용할 수 있다.
function makeUser(user: UserInfo): string {
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
