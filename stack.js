"use strict"

class Stack {
  constructor() {
    this.items = [];
  }

  /**
   *
   * @param element
   */
  push(element) {
    console.log("pushing")
    console.log(element)
    return this.items.push(element)
  }

  pop() {
    console.log("popping", this.peek())
    return this.items.length ? this.items.pop() : undefined
  }

  peek() {
    console.log("peeking")
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    console.log("is empty ?")
    return !this.items.length
  }

  printStack() {
    console.log("printing stack")
    let str = '';
    this.items.forEach(item => {
      str += `${item} `
    });

    return str;
  }
}

module.exports = Stack;

const stack = new Stack();

console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack.printStack())

stack.pop();
stack.pop();
console.log(stack.peek())
console.log(stack.printStack())
