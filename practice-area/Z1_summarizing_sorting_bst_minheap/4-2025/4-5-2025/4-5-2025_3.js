class Node {
  v = null;
  next = null;
  constructor(v) {
    this.v = v;
  }
  set next(add) {
    this.next = add;
  }
}
class Queue {
  head = null;
  tail = null;
  constructor() {}
  enqueue(v) {
    const newnode = new Node(v);
    if(!this.head) {
      this.head = newnode;
      this.tail = newnode;
    }
    else{
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }
  dequeue() {
    if (!this.head) return null;
    const v = this.head.v;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return v;
  }
  print() {
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(node.v);
      node = node.next;
    }
    console.log(arr.join(' -> '));
  }
}
class Stack {
  arr = [];
  constructor() {}
  push(v) {
    this.arr.push(v);
  }
  pop() {
    return this.arr.pop();
  }
  print() {
    console.log(this.arr.join(','));
  }
}


// Test Queue
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print(); // Expected: 10 -> 20 -> 30

console.log('Dequeue:', q.dequeue()); // Expected: 10
q.print(); // Expected: 20 -> 30

console.log('Dequeue:', q.dequeue()); // Expected: 20
q.print(); // Expected: 30

console.log('Dequeue:', q.dequeue()); // Expected: 30
q.print(); // Expected: (empty)

console.log('Dequeue:', q.dequeue()); // Expected: null
q.print(); // Expected: (empty)


// Test Stack
const s = new Stack();
s.push(100);
s.push(200);
s.push(300);
s.print(); // Expected: 100,200,300

console.log('Pop:', s.pop()); // Expected: 300
s.print(); // Expected: 100,200

console.log('Pop:', s.pop()); // Expected: 200
s.print(); // Expected: 100

console.log('Pop:', s.pop()); // Expected: 100
s.print(); // Expected: (empty)

console.log('Pop:', s.pop()); // Expected: undefined
s.print(); // Expected: (empty)
