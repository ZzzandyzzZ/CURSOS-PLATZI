class StackNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bot = null;
        this.length = 0;
    }
    peek() {
        return this.top?.value;
    }
    push(value) {
        let newNode = new StackNode(value);
        if(this.length === 0) {
          this.bot = newNode;
          this.top = newNode;
        } else {
          newNode.next = this.top;
          this.top = newNode;
        }
        this.length++;
    }
    pop() {
      if(this.length === 1) {
        this.top = null;
        this.bot = null;
      } else {
        this.top = this.top.next;
      }
      this.length--;
    }
}

let myStack = new Stack();
myStack.push(3);
myStack.push(2);
myStack.push(1);
myStack.push(0);
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.bot);