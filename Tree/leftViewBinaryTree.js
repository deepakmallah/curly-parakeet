"use strict"

class Node {
  constructor(element) {
    this.data = element;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  viewUtil(node, isLeftNode) {
    if (!node) {
      return;
    }

    if(isLeftNode) console.log(node.data + " ");

    this.viewUtil(node.left, true);
    this.viewUtil(node.right);
  }

  leftView(){
    var current = this.root;
    this.viewUtil(current, true);
  }
}

module.exports = BinaryTree;

var BT = new BinaryTree();

BT.root = new Node(3);
BT.root.left = new Node(5);
BT.root.right = new Node(7);
BT.root.left.left = new Node(18);
BT.root.left.right = new Node(2);
BT.root.right.left = new Node(17);
BT.root.right.right = new Node(70);
BT.leftView();

// Output = 3 5 18 17
