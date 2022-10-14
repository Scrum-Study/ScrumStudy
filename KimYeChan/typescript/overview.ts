//type alias : 객체 프로퍼티의 타입을 지정해서 변수처럼 선언해주고 관리할 수 있다.(재사용 할 수 있다)
type Player = {
  readonly name: string;
  // 선택적 속성 뒤엔 ?를 붙인다.
  age?: number;
};
const yechan: Player = {
  name: "yechan",
  //age는 선택적 속성이라 없어도 오류가 나지 않음
};

const minsu: Player = {
  name: "minsu",
  age: 29,
};

//name은 readonly 속성이라 바꿀 수 없음
yechan.name = "yc";

// 함수의 매개변수 및 return 타입 지정
function playerMaker(name: string): Player {
  return {
    name,
  };
}

const Maker = (name: string): Player => {
  return {
    name,
    age: 10,
  };
};
const alex = playerMaker("alex");
// alex가 Player 타입이고 Player 타입은 age 프로퍼티를 가질 수 있기 때문에
// age 프로퍼티를 추가하고 10을 할당 해도 오류가 생기지 않음
alex.age = 10;
//age는 숫자 타입이기 때문에 문자열 할당 시 오류
alex.age = "10";

// Tuple
//배열의 타입 순서, 개수 모두 맞아야 오류가 생기지 않음
let array: [number, string, boolean] = [1, "1", true];
array = ["1", 1, true];
array = [1, "1"];

// any
// any 타입은 타입스크립트 보호장치를 해제 시킴
let a: any = 1;
// 문자열을 할당하거나 서로 다른 타입을 더해도 문제가 안 생김
a = "1";
a += a + true;

// unknown
let b: unknown;
b += b + 1;
b.toUpperCase();

// 타입 확인을 거쳐야만 연산을 수행할 수 있다.
if (typeof b === "number") {
  b += b + 1;
}
if (typeof b === "string") {
  b.toUpperCase();
}

// void : return이 없는 함수의 타입
function tool(a: string) {
  console.log(a);
}

// never : 함수의 예외 처리에 사용
function hello(a: string | number) {
  if (typeof a === "string") {
    a; //string
  } else if (typeof a === "number") {
    a; //string
  } else {
    a; // never
    throw Error("~");
  }
}
