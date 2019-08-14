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
    this.depth = {
      data: 0,
      level: 0
    };
    this.level = 0;
  }

  viewUtil(node, level) {
    if (!node) {
      return 0;
    }

    // Odd leaf node
    if(!node.left && !node.right && node.data % 2) {
        this.depth.data = node.data;
        this.depth.level = level;
      return this.depth.level;
    }
    let currentLevel = level + 1;
    return Math.max(this.viewUtil(node.left, currentLevel), this.viewUtil(node.right, currentLevel))
  }

  depthOfOdd(){
    return this.viewUtil(this.root, 0);
  }
}

module.exports = BinaryTree;

var tree = new BinaryTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(6);
tree.root.right.left.right = new Node(7);
tree.root.right.right.right = new Node(8);
tree.root.right.left.right.left = new Node(9);
tree.root.right.right.right.right = new Node(10);
tree.root.right.right.right.right.left = new Node(12);

console.log(tree.depthOfOdd());
console.log(tree.depth);
// Output = 5
// Bonus = { data: 9, level: 4 }

