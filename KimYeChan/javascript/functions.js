//functions.ts 트랜스 컴파일한 js 파일
"use strict";
//Call Signatures
//함수에 마우스를 올렸을 때 보게 되는 것
// 함수를 호출 했을 때 어떻게 호출해야 하는 지 알려준다.
// (a: number, b: number) => number 가 Call Signatures가 된다.
const add = (a, b) => a + b;
const push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};
// c parameter는 옵션이라 뒤에 ? 붙여줌
const multiply = (a, b, c) => {
  if (c) return a * b * c;
  return a * b;
};
multiply(1, 2);
multiply(1, 2, 3);
const superPrint = (arr) => arr[0];
const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true], 1);
const c = superPrint(["a", "b", "c"], true);
const d = superPrint([1, "a", true], []);
b.toUpperCase(); //any와 다르게 오류가 난다.
const yechan = {
  name: "yechan",
  extraInfo: {
    favFood: "curry",
  },
};
const minsu = {
  name: "minsu",
  extraInfo: null,
};
const array = [1, "2", 3];
//number[] 대신 Array<number> 사용
function printAllNumbers(arr) {}
