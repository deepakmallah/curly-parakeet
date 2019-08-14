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
    this.leafLevel = 0;
  }

  viewUtil(node, level) {
    if (!node) {
      return true;
    }

    console.log(node.data)
    // Odd leaf node
    if(!node.left && !node.right) {
      if(this.leafLevel == 0) {
        this.leafLevel = level;
      }
      return this.leafLevel == level;
    }

    let currentLevel = level + 1;
    return this.viewUtil(node.left, currentLevel) && this.viewUtil(node.right, currentLevel)
  }

  leafAtSameLevel(){
    return this.viewUtil(this.root, 0);
  }
}

module.exports = BinaryTree;

var tree = new BinaryTree();

tree.root = new Node(12);
tree.root.left = new Node(5);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(9);
tree.root.left.left.left = new Node(21);
tree.root.left.right.left = new Node(1);
tree.root.right = new Node(5);
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(5);
// tree.root.left.left.left.left = new Node(11);

console.log(tree.leafAtSameLevel());
console.log(tree.depth);
// Output = 5
// Bonus = { data: 9, level: 4 }

