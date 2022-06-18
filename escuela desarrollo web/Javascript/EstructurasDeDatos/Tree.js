class Node{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
    } else {
      let currNode = this.root;
      while(currNode) {
        if(value < currNode.value) {
          if (!currNode.left) return currNode.left = newNode;
          else currNode = currNode.left;
        } else {
          if (!currNode.right) return currNode.right = newNode;
          else currNode = currNode.right;
        }
      }
    }
  }
  search(value) {
    let currNode = this.root;
      while(currNode) {
        if(currNode.value == value) return currNode;
        if(value < currNode.value) {
          currNode = currNode.left;
        } else {
          currNode = currNode.right;
        }
      }
  }
}
let myTree = new BinarySearchTree();
myTree.insert(10);
myTree.insert(4);
myTree.insert(20);
myTree.insert(2);
myTree.insert(8);
myTree.insert(17);
console.log(myTree)
console.log(myTree.search(4))