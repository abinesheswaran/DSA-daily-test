class Node {
  v = null;
  l = null;
  r = null;
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
    const dn = (n, v) => {
      if (!n) return null;
      if (n.v > v) n.l = dn(n.l, v);
      if (n.v < v) n.r = dn(n.r, v);
      else {
        if (!n.r) return n.l;
        if (!n.l) return n.r;

        const s = this.findmin(n.r);
        n.v = s.v;
        n.r = dn(n.r, s.v);
      }
      return n;
    };
    this.h = dn(this.h, v);
  }
  findmin(t = this.h) {
    while (t.l) t = t.l;
    return t;
  }
  findmax(t = this.h) {
    while (t.r) t = t.r;
    return t;
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
  ispresent(v) {
    let t = this.h;
    while (t) {
      if (t.v === v) return true;
      if (t.v > v) t = t.l;
      else t = t.r;
    }
    return false;
  }
  preorder(t = this.h) {
    const arr = [];
    const fn = (n) => {
      if (!n) {
        arr.push(null);
        return null;
      }
      arr.push(n.v);
      fn(n.l);
      fn(n.r);
    };
    fn(t);
    return arr;
  }
  inorder(t = this.h) {
    const arr = [];
    const fn = (n) => {
      if (!n) {
        arr.push(null);
        return null;
      }
      fn(n.l);
      arr.push(n.v);
      fn(n.r);
    };
    fn(t);
    return arr;
  }
  postorder(t = this.h) {
    const arr = [];
    const fn = (n) => {
      if (!n) {
        arr.push(null);
        return null;
      }
      fn(n.l);
      fn(n.r);
      arr.push(n.v);
    };
    fn(t);
    return arr;
  }
  bf(t = this.h) {
    const arr = [t];
    const varr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        varr.push(null);
        continue;
      }
      varr.push(arr[i].v);
      if (arr[i].l || arr[i].r) {
        arr.push(arr[i].l);
        arr.push(arr[i].r);
      }
    }
    return varr;
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
tree.add(17);

console.log('Is 7 present?', tree.ispresent(7)); // true
console.log('Is 20 present?', tree.ispresent(20)); // false

console.log('Minimum value:', tree.findmin().v); // 3
console.log('Maximum value:', tree.findmax().v); // 17

console.log('Tree height:', tree.getheight()); // Should be 2
console.log('Is tree balanced?', tree.isbalanced()); // true

console.log('Deleting node 15...');
tree.delete(15);
console.log('Is 15 present after deletion?', tree.ispresent(15)); // false

console.log('Tree height after deletion:', tree.getheight());
console.log('Is tree balanced after deletion?', tree.isbalanced());

console.log('Preorder traversal after deletion:', tree.preorder());
console.log('Inorder traversal after deletion:', tree.inorder());
console.log('Postorder traversal after deletion:', tree.postorder());
console.log('Breadth-First traversal after deletion:', tree.bf());
