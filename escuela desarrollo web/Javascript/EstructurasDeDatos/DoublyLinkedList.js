class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class SinglyLinkedList{
    constructor(firstValue){
        this.head = new Node(firstValue);
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value){
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(pos, value){
        if(pos>= this.length) return this.append(value);
        if(pos == 0) return this.prepend(value);
        let currNode = this.head;
        let currPos = 0;
        while(currNode && currPos < pos){
            currPos++;
            currNode = currNode.next;
        }
        const newNode = new Node(value);
        currNode.next.prev = newNode;
        newNode.prev = currNode;
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
    }
    getByIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
      }
    show(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    showInverse(){
        let currentNode = this.tail;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.prev;
        }
    }
}

let myLinkedList = new SinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);
myLinkedList.insert(0, 10);
myLinkedList.show();
myLinkedList.showInverse();



