// 추상 클래스 --> 자바스크립트에는 없고 타입 스크립트에서 제공하는 기능
// 인스턴스 생성은 불가하고 상속하는 클래스가 가져야 할 속성과 메서드를 명시하여 사용할 수 있게 한다.
abstract class User {
  constructor(
    //private은 인스턴스 밖에서 접근할 수 없고 다른 자식 클래스에서도 접근 불가
    //protected는 인스턴스 밖에서는 접근할 수 없고 자식 클래스에서는 접근 가능
    protected firstName: string,
    public lastName: string,
    private nickname: string
  ) {}
  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //추상 매서드 --> 추상 클래스에서 만들 수 있음
  //메서드의 call signature만 정의
  // 상속 받는 곳에서 구현 해야함
  abstract getNickName(): void;
  abstract getFirstName(): void;
  abstract getLasttName(): void;
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

// 해시맵 만들기

type Words = {
  //string 만을 속성으로 갖는 object  --> object 속성 개수는 모르지만 타입은 알 때 사용
  [key: string]: string;
};

class Dict {
  private words: Words;
  //수동 초기화
  constructor() {
    this.words = {};
  }
  //클래스를 타입으로 사용할 수 있음
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  static hello() {
    return " hello";
  }
}

class Word {
  constructor(public readonly term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");

kimchi.term = "김치";
kimchi.def = "맛있어요";

//static method -> 인스턴스 생성 안해도 쓸 수 있는 메소드

Dict.hello();
