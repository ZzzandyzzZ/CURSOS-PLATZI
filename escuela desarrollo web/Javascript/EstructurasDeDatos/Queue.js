class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first?.value;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
          this.first = newNode;
          this.last = newNode;
        } else {
          this.last.next = newNode;
          this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
      if(this.length === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next;
      }
      this.length--;
    }
}

let myQueue = new Queue();
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);
myQueue.enqueue(0);
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue.first);