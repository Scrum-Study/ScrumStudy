//Call Signatures
//함수에 마우스를 올렸을 때 보게 되는 것
// 함수를 호출 했을 때 어떻게 호출해야 하는 지 알려준다.

//Call Signature 미리 type으로 선언
type Add = (a: number, b: number) => number;
// (a: number, b: number) => number 가 Call Signatures가 된다.
const add: Add = (a, b) => a + b;

// Polymorphism (다형성)
// Overloading
// 매개변수 개수는 같으나 타입은 서로 다른 경우의 오버로딩
type Config = {
  path: string;
  state: string;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};
// 매개변수 개수가 다른 오버로딩
type Multiply = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
// c parameter는 옵션이라 뒤에 ? 붙여줌
const multiply: Multiply = (a, b, c?: number) => {
  if (c) return a * b * c;
  return a * b;
};
multiply(1, 2);
multiply(1, 2, 3);

// Generic
// 매개변수 타입이나 개수, 리턴 타입에 구애 받지 않고 다양한 함수를 만들고 싶을 때
// 굳이 여러 개의 Call Signature를 만들어줄 필요 없이 한 줄로 가능하게 하는 방법
type SuperPrint = {
  // <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
  // TypePlaceholder 자리에 알파벳 대문자로 시작하는 뭐든 들어갈 수 있음 ex) T,V,M...
  <T, M>(arr: T[], b: M): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true], 1);
const c = superPrint(["a", "b", "c"], true);
const d = superPrint([1, "a", true], []);

b.toUpperCase(); //any와 다르게 오류가 난다.
//Generic을 사용하면 함수가 호출 됐을 때 타입스크립트가 함수를 읽고
// 그 함수의 call signature를 직접 만들어 주기 때문에 any와는 다르다.

//Generic을 쓰는 다양한 예시
type Player<E> = {
  name: string;
  extraInfo: E;
};

type Food = {
  favFood: string;
};
const yechan: Player<Food> = {
  name: "yechan",
  extraInfo: {
    favFood: "curry",
  },
};

const minsu: Player<null> = {
  name: "minsu",
  extraInfo: null,
};

type A = Array<number | string>;
const array: A = [1, "2", 3];

//number[] 대신 Array<number> 사용
function printAllNumbers(arr: Array<number>) {}
