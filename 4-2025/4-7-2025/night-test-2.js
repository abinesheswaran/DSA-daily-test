class Node {
  v = null;
  r = null;
  l = null;
  constructor(v) {
    this.v = v;
  }
}

class BST {
  h = null;
  constructor() {}
  add(v) {
    const n = new Node(v);
    if (!this.h) {
      this.h = n;
      return;
    }
    let t = this.h;
    while (t) {
      if (t.v > v) {
        if (t.l) t = t.l;
        else {
          t.l = n;
          break;
        }
      } else {
        if (t.r) t = t.r;
        else {
          t.r = n;
          break;
        }
      }
    }
  }
  delete(v) {
    const deleteNode = (n, v) => {
      if (!n) return null;
      if (n.v > v) n.l = deleteNode(n.l, v);
      else if (n.v < v) n.r = deleteNode(n.r, v);
      else {
        if (!n.r && !n.l) return null;
        if (!n.r) return n.l;
        if (!n.l) return n.r;

        const s = this.findmin(n.r);
        n.v = s.v;
        n.r = deleteNode(n.r, s.v);
      }
      return n;
    };
    this.h = deleteNode(this.h, v);
  }
  getTopNodeValue() {
    return this.h.v;
  }
  ispresent(v) {
    let t = this.h;
    while (t) {
      if (t.v === v) return true;
      if (t.v > v) t = t.l;
      else t = t.r;
    }
    return false;
  }
  findmin(t = this.h) {
    while (t.l) t = t.l;
    return t;
  }
  findMax(t = this.h) {
    while (t.r) t = t.r;
    return t;
  }
  getheight(t = this.h) {
    if (!t) return -1;
    return 1 + Math.max(this.getheight(t.l), this.getheight(t.r));
  }
  isbalanced(n = this.h) {
    if (!n) return true;
    const l = this.getheight(n.l);
    const r = this.getheight(n.r);
    if (Math.abs(l - r) > 1) return false;
    return this.isbalanced(n.l) && this.isbalanced(n.r);
  }
}

const tree = new BST();

// Test: Add nodes
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(2);
tree.add(7);
tree.add(12);
tree.add(20);

// Test: ispresent
console.log(tree.ispresent(10)); // true
console.log(tree.ispresent(7)); // true
console.log(tree.ispresent(21)); // false

// Test: findmin
console.log(tree.findmin()); // 2

// Test: findMax
console.log(tree.findMax()); // 20

// Test: getheight
console.log(tree.getheight()); // expected height (play with this)

// Optional: try to add duplicate (BSTs normally handle this)
tree.add(7);
console.log(tree.ispresent(7)); // should still be true

// For delete: when you finish, try:
tree.delete(10);
console.log(tree.ispresent(10)); // should be false after delete

// For isbalanced: when you finish that, try:
console.log(tree.isbalanced()); // true or false
