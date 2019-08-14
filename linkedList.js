"use strict"

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   *
   * @param element
   */
  add(element) {
    // creates a new node
    var node = new Node(element)

    // to store current node.
    var current = null;

    // if list is Empty add the
    // element and make it head
    if(this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      //add node
      current.next = node;
    }

    this.size++;
  }

  /**
   *
   * @param element
   * @param index
   * @returns {boolean}
   */
  insertAt(element, index) {
    if(index > 0 && index > this.size) return false;

    var node = new Node(element);
    var current = this.head;
    var previous = null;


    if(index == 0) {

      node.next = current;
      this.head = node;

    } else {

      var iteration = 0;

      while(iteration <= index) {
        if(iteration == index) {
          node.next = current;
          previous.next = node;

          this.size++;
        } else {
          previous = current;
          current = current.next;
        }

        iteration++;
      }
    }
  }

  removeFrom(index) {
    if(index < 0 && index > this.size) return -1;

    var current = this.head;
    var previous;
    var iteration = 0;

    if(index == 0) {
      this.head = current.next;
      this.size--;
    } else {
      while(iteration < index) {
        iteration++;

        previous = current;
        current = current.next;
      }

      previous.next = current.next;
      this.size--;
    }

    return current.element;
  }

  removeElement(element) {
    var current = this.head;
    var previous = null;
    var iteration = 0;

    while(iteration < this.size) {
      if(current.element == element) {

        previous.next = current.next;
        current = current.next;

        this.size--;
      } else {
        previous = current;
        current = current.next;
      }

      iteration++
    }
  }

  isEmpty() {
    let status = !this.size;
    console.log("Is Empty", status)

    return status;
  }

  sizeOfList() {
    console.log("size is", this.size)
  }

  PrintList(){
    var current = this.head;
    var str = '';

    while(current) {
      str += current.element;

      if(current.next) str +=  " -> ";
      current = current.next;
    }

    console.log("List", str)
  }
}

module.exports = LinkedList;
//
// var LL = new LinkedList();
//
// LL.isEmpty();
// LL.sizeOfList();
// LL.add("a");
// LL.add("b");
// LL.add("c");
//
// LL.removeFrom(2);
// LL.PrintList();
//
// LL.add("d");
// LL.PrintList();
// LL.add("e");
// LL.add("f");
// LL.sizeOfList();
// LL.add("g");
// LL.add("e");
// LL.add("h");
// LL.removeElement('e');
// LL.add("i");
//
// LL.insertAt("z", 1);
// LL.PrintList();
// LL.sizeOfList();
// LL.isEmpty();
