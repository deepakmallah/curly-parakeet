"use strict"

var LinkedList = require('./linkedList');

/** Return kth item onwards - starts **/
let returnKthOnwardItems = (head, kth) => {
  if(!head) return 0;

  let index = returnKthOnwardItems(head.next, kth) + 1;

  if(kth == index) {
    console.log(`${kth}th to last node is ${head.element}`)
  }

  return index;
};

// var LL = new LinkedList();
// LL.add("a");
// LL.add("b");
// LL.add("c");
// LL.add("d");
// LL.add("e");
// LL.add("f");
// LL.add("g");
// LL.add("h");
// LL.add("i");
// LL.PrintList();
// returnKthOnwardItems(LL.head, 3);

/** Return kth item onwards - ends **/

/** Partition the Linked list - starts **/
let partitionTheLinkedList = (LL, partition) => {
  if(!LL.head) return 0;

  var head = LL.head;
  var current = LL.head;
  var previous = null;

  // console.log("head head", head)

  while(current) {
    let next = current.next;
    if(current.element < partition) {
      console.log("if", current)
      console.log("head", head)

      var tmpNode = current;
      previous.next = current.next;

      // head = tmpNode;

      tmpNode.next = LL.head.next;
      LL.head = tmpNode;
      // head =  LL.head


      // LL.head = tmpNode;
      // tmpNode.next = head;
    } else {
      // console.log("else", current)

    }
    previous = current;
    current = next;
  }
};

var LL = new LinkedList();

LL.add(11);
LL.add(3);
LL.add(5);
LL.add(8);
LL.add(5);
LL.add(10);
LL.add(2);
LL.add(1);

LL.PrintList();

partitionTheLinkedList(LL, 5);
LL.PrintList();
/** Partition the Linked list - ends **/






