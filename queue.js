"use strict"

class Queue {
  constructor() {
    this.items = [];
  }

  /**
   *
   * @param element
   */
  add(element) {
    console.log("pushing")
    console.log(element)
    return this.items.push(element)
  }

  remove() {
    console.log("removing", this.peek())
    return this.items.pop()
  }

  peek() {
    console.log("peeking")
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    console.log("is empty ?")
    return !this.items.length
  }

  printQueue() {
    console.log("printing stack")
    let str = '';
    this.items.forEach(item => {
      str += `${item} `
    });

    return str;
  }
}

module.exports = Queue;

const queue = new Queue();

console.log(queue.isEmpty())
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
queue.add(5)

console.log(queue.printQueue())

queue.remove();
queue.remove();
console.log(queue.peek())
console.log(queue.printQueue())


// //code.iamkate.com
// function Queue() {
//   var a = [], b = 0;
//   this.getLength = function () {
//     return a.length - b
//   };
//   this.isEmpty = function () {
//     return 0 == a.length
//   };
//   this.enqueue = function (b) {
//     a.push(b)
//   };
//   this.dequeue = function () {
//     if (0 != a.length) {
//       var c = a[b];
//       2 * ++b >= a.length && (a = a.slice(b), b = 0);
//       return c
//     }
//   };
//   this.peek = function () {
//     return 0 < a.length ? a[b] : void 0
//   }
// };
