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

      while(iteration < index) {
        iteration++;

        previous = current;
        current = current.next;
      }

      // previous = current.next
      // current.next = node;

      node.next = current;
      previous.next = node;
    }

    this.size++;
  }

  removeFrom(index) {
    if(index < 0 && index > this.size) return -1;

    var current = this.head;
    var previous;
    var iteration = 0;

    if(index == 0) {
      this.head = current.next;
    } else {
      while(iteration < index) {
        iteration++;

        previous = current
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;

    return current.element;
  }

  PrintList(){
    var current = this.head;
    var str = '';

    while(current) {
      str += current.element + " ";

      current = current.next;
    }

    console.log("List", str)
  }

  // functions to be implemented
  // removeElement(element)

  // Helper Methods
  // isEmpty
  // size_Of_List
  // PrintList
}


var LL = new LinkedList();

LL.add("a");
LL.add("b");
LL.add("c");

LL.removeFrom(2);

LL.add("d");

LL.PrintList();
