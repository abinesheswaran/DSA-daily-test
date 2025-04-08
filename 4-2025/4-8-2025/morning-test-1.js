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
  findmax(t = this.h) {
    while (t.r) t = t.r;
    return t;
  }
  delete(v) {
    const deleteNode = (n, v) => {
      if (!n) return null;
      if (n.v > v) n.l = deleteNode(n.l, v);
      else if (n.v < v) n.r = deleteNode(n.r, v);
      else {
        if (!n.r && !n.l) return null;
        if (!n.l) return n.r;
        if (!n.r) return n.l;

        const s = this.findmin(n.r);
        n.v = s.v;
        n.r = deleteNode(n.r, s.v);
      }
      return n;
    };
    this.h = deleteNode(this.h, v);
  }
  getheight(t = this.h) {
    if (!t) return -1;
    return 1 + Math.max(this.getheight(t.l), this.getheight(t.r));
  }
  isbalanced(t = this.h) {
    if (!t) return true;
    const l = this.getheight(t.l);
    const r = this.getheight(t.r);
    if (Math.abs(l - r) > 1) return false;
    return this.isbalanced(t.l) && this.isbalanced(t.r);
  }
}

const tree = new BST();

// Add nodes
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(12);
tree.add(18);

console.log('Tree created.');

// Check presence
console.log('Is 7 present?', tree.ispresent(7)); // true
console.log('Is 20 present?', tree.ispresent(20)); // false

// Find min and max
console.log('Min value:', tree.findmin().v); // 3
console.log('Max value:', tree.findmax().v); // 18

// Check height
console.log('Height of tree:', tree.getheight()); // should be 2

// Check balance (but your isbalanced function has a bug, we'll fix it later)
console.log('Is tree balanced?', tree.isbalanced()); // Expected true, but let's debug later

// Delete leaf node
tree.delete(3);
console.log('Deleted 3, is 3 present?', tree.ispresent(3)); // false

// Delete node with one child
tree.delete(15);
console.log('Deleted 15, is 15 present?', tree.ispresent(15)); // false

// Delete node with two children
tree.delete(10);
console.log('Deleted 10, is 10 present?', tree.ispresent(10)); // false

// Final height
console.log('Final height of tree:', tree.getheight());
