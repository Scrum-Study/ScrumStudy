//Call Signatures
//함수에 마우스를 올렸을 때 보게 되는 것
// 함수를 호출 했을 때 어떻게 호출해야 하는 지 알려준다.

//Call Signature 미리 type으로 선언
type Add = (a: number, b: number) => number;
// (a: number, b: number) => number 가 Call Signatures가 된다.
const add: Add = (a, b) => a + b;
