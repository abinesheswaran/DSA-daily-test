class N {
  v = null;
  l = null;
  r = null;
  constructor(v) {
    this.v = v;
  }
  set l(add) {
    this.l = add;
  }
  set r(add) {
    this.r = add;
  }
}

class BST {
  h = null;
  constructor() {}
  add(v) {
    const n = new N(v);
    let t = this.h;
    if (!t) {
      this.h = n;
      return;
    }
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
      if (n.v < v) n.l = deleteNode(n.l, v);
      else if (n.v > v) n.r = deleteNode(n.r, v);
      else {
        if (!n.l && !n.r) return null;
        if (!n.l) return n.r;
        if (!n.r) return n.l;
        const s = this.findmin(n.r);
        n.v = s.v;
        n.r = deleteNode(n.r, s.v);
      }
      return n;
    };
    deleteNode(this.h, v);
  }

  ispresent(v) {
    let t = this.h;
    while (t) {
      if (t.v === v) return true;
      t = t.v > v ? t.l : t.r;
    }
    return false;
  }
  getheight(n = this.h) {
    if (!n) return -1;
    return 1 + Math.max(this.getheight(n.l), this.getheight(n.r));
  }
  findmin(t = this.h) {
    while (t.l) t = t.l;
    return t;
  }
  findmax(t = this.h) {
    while (t.r) t = t.r;
    return t;
  }
  isbalanced() {
    const check = (n) => {
      if (!n) return true;
      const lh = this.getheight(n.l);
      const rh = this.getheight(n.r);
      if (Math.abs(lh - rh) > 1) return false;
      return check(n.l) && check(n.r);
    };
    return check(this.h);
  }
}

const tree = new BST();

// Test: Adding nodes
tree.add(50);
tree.add(30);
tree.add(70);
tree.add(20);
tree.add(40);
tree.add(60);
tree.add(80);

console.log('Tree created.');

// Test: Presence check
console.log('Is 40 present?', tree.ispresent(40)); // Should be true
console.log('Is 100 present?', tree.ispresent(100)); // Should be false

// Test: Minimum value
console.log('Minimum value:', tree.findmin()?.v);

// Test: Maximum value
console.log('Maximum value:', tree.findmax()?.v);

// Test: Height of the tree
console.log('Height of the tree:', tree.getheight());

// Test: Delete leaf node
tree.delete(20);
console.log('Deleted 20. Is 20 present?', tree.ispresent(20));

// Test: Delete node with one child
tree.delete(30);
console.log('Deleted 30. Is 30 present?', tree.ispresent(30));

// Test: Delete node with two children
tree.delete(50);
console.log('Deleted 50. Is 50 present?', tree.ispresent(50));

// Final height after deletions
console.log('Height after deletions:', tree.getheight());

console.log(tree.isbalanced());

tree.add(100);
tree.add(200);
tree.add(300);
tree.add(400);
tree.add(500);
tree.add(600);
tree.add(700);
tree.add(800);
tree.add(900);

// Test: Height of the tree
console.log('Height of the tree:', tree.getheight());

console.log(tree.isbalanced());
