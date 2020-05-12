/* Singly Linked List */

/* Linked List - an ordered data structure that stores data
 and contains a head, tail, and length property

Linked Lists consists of nodes, and each node has a value
 and a pointer to another node or null.

In a singly linked list...
Each node is only connected to the next node
In a doubly linked list...
Each node also can go backwards

Comparison with Arrays...
Lists
- do not have indices
- connected via nodes with a next pointer
- random access is not allowed

Arrays
- indexed in order
- inserts and deletions can be expensive from 
 the beginning and middle of the array
- can quickly be accessed at a specific index */ 

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
}

let list = new SinglyLinkedList
list.push("Hello")
list.push("Goodbye")
// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")