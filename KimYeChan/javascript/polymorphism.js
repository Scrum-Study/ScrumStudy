//polymorphism.ts 트랜스 컴파일한 js 파일
"use strict";
class LocalStorage {
  constructor() {
    this.storage = {};
  }
  set(key, value) {
    this.storage[key] = value;
  }
  remove(key) {
    delete this.storage[key];
  }
  get(key) {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
const stringsStorage = new LocalStorage();
stringsStorage.set("kitty", "cat");
console.log(stringsStorage.get("kitty"));
const booleanStorage = new LocalStorage();
booleanStorage.set("hello", true);
console.log(booleanStorage.get("hello"));
