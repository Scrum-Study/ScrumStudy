//type alias : 객체 프로퍼티의 타입을 지정해서 변수처럼 선언해주고 관리할 수 있다.(재사용 할 수 있다)
type Players = {
  readonly name: string;
  // 선택적 속성 뒤엔 ?를 붙인다.
  age?: number;
};
const yechann: Players = {
  name: "yechan",
  //age는 선택적 속성이라 없어도 오류가 나지 않음
};

const minsuu: Players = {
  name: "minsuu",
  age: 29,
};

//name은 readonly 속성이라 바꿀 수 없음
yechann.name = "yc";

// 함수의 매개변수 및 return 타입 지정
function playerMaker(name: string): Players {
  return {
    name,
  };
}

const Maker = (name: string): Players => {
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
let arrays: [number, string, boolean] = [1, "1", true];
arrays = ["1", 1, true];
arrays = [1, "1"];

// any
// any 타입은 타입스크립트 보호장치를 해제 시킴
let aa: any = 1;
// 문자열을 할당하거나 서로 다른 타입을 더해도 문제가 안 생김
aa = "1";
aa += aa + true;

// unknown
let bb: unknown;
bb += bb + 1;
bb.toUpperCase();

// 타입 확인을 거쳐야만 연산을 수행할 수 있다.
if (typeof bb === "number") {
  bb += bb + 1;
}
if (typeof bb === "string") {
  bb.toUpperCase();
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
