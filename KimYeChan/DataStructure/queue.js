// 배열의 크기가 유동적인 JS Array로 구현한 queue
class Queue {
  constructor() {
    this.queue = [];
    //배열의 첫번째 원소 인덱스
    this.front = 0;
    //배열의 마지막 위치의 인덱스 
    this.rear = 0;
  }
  // queue에 요소 추가
  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear += 1;
  }
  // queue에 요소 삭제
  dequeue() {
    const value = this.queue[this.front];
    //javascript array가 근본적으로 객체타입이기 때문에 가능한 delete 연산
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  // 가장 먼저 삽입된 원소 리턴
  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}
