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
class BinaryNode {
  v = null;
  r = null;
  l = null;
  constructor(v) {
    this.v = v;
  }
  set r(add) {
    this.r = add;
  }
  set l(add) {
    this.l = add;
  }
}
class BinarySearchTree {
  head = null;
  constructor() {}
  add(v) {
    const node = new BinaryNode(v);
    if (!this.head) this.head = node;
    else {
      let temp = this.head;
      while (temp) {
        if (temp.v < v) {
          if (temp.r) {
            temp = temp.r;
          } else {
            temp.r = node;
            break;
          }
        } else {
          if (temp.l) {
            temp = temp.l;
          } else {
            temp.l = node;
            break;
          }
        }
      }
    }
  }
  deleteroot() {
    if (!this.head) return null;
    if (!this.head.l && !this.head.r) {
      this.head = null;
    } else if (!this.head.l) {
      this.head = this.head.r;
    } else if (!this.head.r) {
      this.head = this.head.l;
    } else {
      let temp = this.head;
      this.head = this.head.r;
      this.head.l = temp.l;
    }
  }
  getTopNodeValue() {
    return this.head.v;
  }
  isPresent(v) {
    let temp = this.head;
    while (temp) {
      if (temp.v === v) return true;
      else if (temp.v > v) temp = temp.l;
      else temp = temp.r;
    }
    return false;
  }
  getHeight() {
    const fn = (n) => {
      if (!n) return -1;
      return 1 + Math.max(fn(n.l), fn(n.r));
    };
    return fn(this.head);
  }
  isBalanced() {}
  findMin() {
    let temp = this.head;
    while (true) {
      if (!temp.l) return temp.v;
      temp = temp.l;
    }
  }
  findMax() {
    let temp = this.head;
    while (true) {
      if (!temp.r) return temp.v;
      temp = temp.r;
    }
  }
  print() {
    const arr = [this.head];
    for (let i = 0; i < arr.length; i++) {
      console.log(`v->${arr[i].v} l->${arr[i].l} r->${arr[i].r}`);
      arr.push(arr[i].l);
      arr.push(arr[i].r);
    }
  }
}

// Create a new instance of BinarySearchTree
const bst = new BinarySearchTree();

// Add nodes
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);
bst.add(12);
bst.add(18);

// Test getTopNodeValue
console.log('Top Node Value:', bst.getTopNodeValue()); // Expected: 10

// Test isPresent
console.log('Is 7 present?', bst.isPresent(7)); // Expected: true
console.log('Is 20 present?', bst.isPresent(20)); // Expected: false

// Test findMin
console.log('Minimum value:', bst.findMin()); // Expected: 3

// Test findMax
console.log('Maximum value:', bst.findMax()); // Expected: 18

// Test getHeight
console.log('Height of BST:', bst.getHeight()); // Depends, should be: 2 or 3 based on your tree definition

// Test delete root node
console.log('Deleting root node...');
bst.deleteroot();
console.log('New Top Node Value:', bst.getTopNodeValue()); // Expected: Depends on delete logic, ideally should be in-order successor

// Test isPresent again after deletion
console.log('Is 10 present after deletion?', bst.isPresent(10)); // Expected: false (since root was 10)

// Optional: Add more nodes and test again
bst.add(20);
bst.add(2);
console.log('New Minimum value:', bst.findMin()); // Expected: 2
console.log('New Maximum value:', bst.findMax()); // Expected: 20
