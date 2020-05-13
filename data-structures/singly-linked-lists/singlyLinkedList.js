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
  pop(){
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
    }
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
        this.tail = null;
    }
    return currentHead;
  }
  unshift(val){
    var newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while(counter !== index){
        current = current.next;
        counter++;
    }
    return current;
  }
  set(index, val){
    var foundNode = this.get(index);
    if(foundNode){
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(var i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print(){
    var arr = [];
    var current = this.head
    while(current){
        arr.push(current.val)
        current = current.next
    }
    console.log(arr);
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